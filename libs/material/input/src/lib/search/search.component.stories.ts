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

import {
  provideDefaultHttpSearchQueryBuilder,
  provideMockCategoryHttpClient,
} from '@webpackages/material/core';

const meta: Meta<SearchComponent> = {
  component: SearchComponent,
  title: 'Search',
  decorators: [
    applicationConfig({
      providers: [
        ...INPUT_STORY_PROVIDERS,
        provideDefaultHttpSearchQueryBuilder(),
        provideMockCategoryHttpClient(),
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
    pluralResourceName: 'categorys',
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Search Category/gi)).toBeTruthy();
  },
};
