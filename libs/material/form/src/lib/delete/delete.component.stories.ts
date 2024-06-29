import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DeleteComponent } from './delete.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import {
  MockCategoryCollectionService,
  provideEntityCollectionService,
} from '@webpackages/material/core';
import { importProvidersFrom } from '@angular/core';
import { FormTestingModule } from '../testing';

const meta: Meta<DeleteComponent> = {
  component: DeleteComponent,
  title: 'DeleteComponent',
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(FormTestingModule),
        provideEntityCollectionService(MockCategoryCollectionService),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<DeleteComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/delete works!/gi)).toBeTruthy();
  },
};
