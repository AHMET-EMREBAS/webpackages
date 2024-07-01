import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { RawFormComponent } from './raw-form.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import {
  provideRawFormGroup,
  provideRawInputOptions,
  provideResouceName,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
import { FormTestingModule } from './../testing';

const meta: Meta<RawFormComponent> = {
  component: RawFormComponent,
  title: 'RawFormComponent',
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(FormTestingModule),
        provideResouceName('Category'),
        provideRawFormGroup(
          new FormGroup({
            name: new FormControl('', [Validators.required]),
          })
        ),
        provideRawInputOptions(
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
