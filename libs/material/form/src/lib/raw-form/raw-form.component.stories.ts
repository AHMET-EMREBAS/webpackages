import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { RawFormComponent } from './raw-form.component';
import { CategoryMetadata } from '@webpackages/metadata';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import {
  provideFormGroup,
  provideInputOptions,
  provideResouceName,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { fn } from '@storybook/test';

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
        provideInputOptions(toFormInputOptions(CategoryMetadata)),
      ],
    }),
  ],

  args: {
    handleFormSubmit: fn(),
  },
  argTypes: {
    isFormSubmitted: {
      description: 'Arg type description.',
    },
    formGroup: {
      description: 'Arg type description.',
    },
    formStore: {
      description: 'Arg type description.',
    },
    valueChange: {
      description: 'Arg type description.',
    },
    valueChangeSub: {
      description: 'Arg type description.',
    },

    submittedEvent: { action: 'submittedEvent' },
    submittedEventSuccess: { action: 'submittedEventSuccess' },
    submittedEventError: { action: 'submittedEventError' },
  },
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
    expect(canvas.getByText(/Category Name/gi)).toBeTruthy();
  },
};
