import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { SearchComponent } from './search.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { INPUT_STORY_PROVIDERS } from '../__story';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { provideDefaultHttpSearchQueryBuilder } from '../input';
import { getBuiltinCategories } from '@webpackages/types';
import { of } from 'rxjs';

class MockHttpClient {
  get(queryPath: string) {
    const search = queryPath.split('=')[1].split('&')[0];
    return of(
      getBuiltinCategories()
        .map((e) => {
          return {
            id: e.id,
            name: e.label,
          };
        })
        .filter((e) => {
          return e.name.toLowerCase().includes(search?.toLowerCase() || '');
        })
        .slice(0, 10)
    );
  }
}

const meta: Meta<SearchComponent> = {
  component: SearchComponent,
  title: 'SearchComponent',
  decorators: [
    applicationConfig({
      providers: [
        ...INPUT_STORY_PROVIDERS,
        provideDefaultHttpSearchQueryBuilder(),
        {
          provide: HttpClient,
          useClass: MockHttpClient,
        },
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj<SearchComponent>;

export const Primary: Story = {
  args: {
    inputControl: new FormControl('', []),
    inputName: 'category',
    inputLabel: 'Search Category',
    resourcePath: 'categorys',
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Search Category/gi)).toBeTruthy();
  },
};
