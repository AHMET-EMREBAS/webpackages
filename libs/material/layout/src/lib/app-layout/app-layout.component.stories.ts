import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { AppLayoutComponent } from './app-layout.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

const meta: Meta<AppLayoutComponent> = {
  component: AppLayoutComponent,
  title: 'AppLayoutComponent',
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        provideRouter([
          {
            path: 'home',
            component: AppLayoutComponent,
          },

          {
            path: 'about',
            component: AppLayoutComponent,
          },
          {
            path: 'services',
            component: AppLayoutComponent,
          },
        ]),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<AppLayoutComponent>;

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
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/app-layout works!/gi)).toBeTruthy();
  },
};
