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
import { provideHttpClient } from '@angular/common/http';

const meta: Meta<SearchComponent> = {
  component: SearchComponent,
  title: 'SearchComponent',
  decorators: [
    applicationConfig({
      providers: [...INPUT_STORY_PROVIDERS, provideHttpClient()],
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
  },
};

export const Heading: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/search works!/gi)).toBeTruthy();
  },
};
