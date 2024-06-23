import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { SearchManyComponent } from './search-many.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { FormControl } from '@angular/forms';
import { INPUT_STORY_PROVIDERS } from '../__story';
import { provideDefaultHttpSearchQueryBuilder } from '../input';
import { HttpClient } from '@angular/common/http';
import { MockHttpCategoryClient } from '../search/search.component.stories';

const meta: Meta<SearchManyComponent> = {
  component: SearchManyComponent,
  title: 'SearchMany',
  decorators: [
    applicationConfig({
      providers: [
        ...INPUT_STORY_PROVIDERS,
        provideDefaultHttpSearchQueryBuilder(),
        {
          provide: HttpClient,
          useClass: MockHttpCategoryClient,
        },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<SearchManyComponent>;

export const Primary: Story = {
  args: {
    inputControl: new FormControl('', []),
    inputName: 'categorys',
    inputLabel: 'Select Categories',
    pluralResourceName: 'categorys',
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Select Categories/gi)).toBeTruthy();
  },
};
