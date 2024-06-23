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
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideDefaultHttpSearchQueryBuilder } from '../input';

const meta: Meta<SearchComponent> = {
  component: SearchComponent,
  title: 'SearchComponent',
  decorators: [
    applicationConfig({
      providers: [
        ...INPUT_STORY_PROVIDERS,
        provideDefaultHttpSearchQueryBuilder(),
        provideHttpClient(
          withInterceptors([
            (req, next) => {
              const nreq = req.clone({
                url: `http://localhost:3000/${req.url}`,
              });
              return next(nreq);
            },
          ])
        ),
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
