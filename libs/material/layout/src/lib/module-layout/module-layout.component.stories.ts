import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { ModuleLayoutComponent } from './module-layout.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

const meta: Meta<ModuleLayoutComponent> = {
  component: ModuleLayoutComponent,
  title: 'ModuleLayoutComponent',
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        provideRouter([
          {
            path: 'home',
            component: ModuleLayoutComponent,
          },
          {
            path: 'about',
            component: ModuleLayoutComponent,
          },
          {
            path: 'services',
            component: ModuleLayoutComponent,
          },
        ]),
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj<ModuleLayoutComponent>;

export const Primary: Story = {
  args: {
    navlistItems: [
      { label: 'Home', route: 'home', icon: 'home' },
      { label: 'About', route: 'about', icon: 'info' },
      { label: 'Services', route: 'services', icon: 'apps' },
    ],
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/module-layout works!/gi)).toBeTruthy();
  },
};
