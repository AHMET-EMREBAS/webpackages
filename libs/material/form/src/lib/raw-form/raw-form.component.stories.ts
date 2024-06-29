import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { RawFormComponent } from './raw-form.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import {
  provideFormGroup,
  provideInputOptions,
  provideResouceName,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// import { fn } from '@storybook/test';

const meta: Meta<RawFormComponent> = {
  component: RawFormComponent,
  title: 'RawFormComponent',
  decorators: [
    applicationConfig({
      providers: [
        provideResouceName('Category'),
        provideFormGroup(
          new FormGroup({
            name: new FormControl('', [Validators.required]),
          })
        ),
        provideInputOptions(
          toFormInputOptions({
            properties: {
              name: { type: 'string', label: 'Input Label' },
            },
            relations: {},
          })
        ),
      ],
    }),
  ],

  // args: {
  //   handleFormSubmit: fn(),
  // },
};
export default meta;

type Story = StoryObj<RawFormComponent>;

export const Primary: Story = {
  args: {
    formStoreName: 'RawFormStory',
    submitButtonLabel: 'Submit',
  },
};

export const Heading: Story = {
  args: {
    formStoreName: 'RawFormStory',
    submitButtonLabel: 'Submit',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Input Label/gi)).toBeTruthy();
  },
};
