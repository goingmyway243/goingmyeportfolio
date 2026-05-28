import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger,
} from '@angular/animations';

/**
 * Fade In Up Animation
 * Elements fade in while moving up from their initial position
 */
export const fadeInUp = trigger('fadeInUp', [
  state('in', style({
    opacity: 1,
    transform: 'translateY(0)',
  })),
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(30px)',
    }),
    animate('600ms 200ms cubic-bezier(0.645, 0.045, 0.355, 1)'),
  ]),
]);

/**
 * Scale Pop Animation
 * Elements scale from 0.8 to 1 with a subtle pop effect
 */
export const scalePop = trigger('scalePop', [
  state('in', style({
    opacity: 1,
    transform: 'scale(1)',
  })),
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'scale(0.8)',
    }),
    animate('500ms 100ms cubic-bezier(0.215, 0.61, 0.355, 1)'),
  ]),
]);

/**
 * Stagger Animation
 * Creates a cascading effect for child elements
 */
export const staggerAnimation = trigger('staggerAnimation', [
  transition('* <=> *', [
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(20px)',
      }),
      stagger('100ms', [
        animate('500ms 150ms cubic-bezier(0.645, 0.045, 0.355, 1)', style({
          opacity: 1,
          transform: 'translateY(0)',
        })),
      ]),
    ], { optional: true }),
  ]),
]);

/**
 * Fade In Animation
 * Simple fade in effect
 */
export const fadeIn = trigger('fadeIn', [
  state('in', style({
    opacity: 1,
  })),
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms ease-in'),
  ]),
]);

/**
 * Slide In Left Animation
 * Elements slide in from the left
 */
export const slideInLeft = trigger('slideInLeft', [
  state('in', style({
    opacity: 1,
    transform: 'translateX(0)',
  })),
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-50px)',
    }),
    animate('600ms cubic-bezier(0.645, 0.045, 0.355, 1)'),
  ]),
]);

/**
 * Slide In Right Animation
 * Elements slide in from the right
 */
export const slideInRight = trigger('slideInRight', [
  state('in', style({
    opacity: 1,
    transform: 'translateX(0)',
  })),
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(50px)',
    }),
    animate('600ms cubic-bezier(0.645, 0.045, 0.355, 1)'),
  ]),
]);

/**
 * Pulse Animation
 * Breathing/pulsing effect
 */
export const pulse = trigger('pulse', [
  state('active', style({
    opacity: 1,
    transform: 'scale(1)',
  })),
  transition('active => active', [
    animate('2s infinite', keyframes([
      style({ opacity: 1, transform: 'scale(1)', offset: 0 }),
      style({ opacity: 0.7, transform: 'scale(1.05)', offset: 0.5 }),
      style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
    ])),
  ]),
]);

/**
 * Spin Animation
 * Rotating animation
 */
export const spin = trigger('spin', [
  state('active', style({
    transform: 'rotate(360deg)',
  })),
  transition('active => active', [
    animate('2s linear infinite'),
  ]),
]);

/**
 * Smooth Height Toggle
 * Animates height expansion/collapse
 */
export const heightToggle = trigger('heightToggle', [
  state('expanded', style({
    height: '*',
    opacity: 1,
    overflow: 'visible',
  })),
  state('collapsed', style({
    height: '0',
    opacity: 0,
    overflow: 'hidden',
  })),
  transition('expanded <=> collapsed', [
    animate('300ms ease-in-out'),
  ]),
]);

/**
 * Morph Animation
 * Smoothly transitions between different states (e.g., border-radius)
 */
export const morph = trigger('morph', [
  state('rounded', style({
    borderRadius: '20px',
  })),
  state('circle', style({
    borderRadius: '50%',
  })),
  transition('rounded <=> circle', [
    animate('300ms ease-in-out'),
  ]),
]);

/**
 * Progress Bar Animation
 * Fills a progress bar smoothly
 */
export const progressFill = trigger('progressFill', [
  state('filled', style({
    width: '100%',
  })),
  transition(':enter', [
    style({ width: '0%' }),
    animate('800ms ease-out'),
  ]),
]);

/**
 * Bounce Animation
 * Bouncy entrance effect
 */
export const bounce = trigger('bounce', [
  transition(':enter', [
    animate('600ms cubic-bezier(0.34, 1.56, 0.64, 1)', keyframes([
      style({ transform: 'translateY(0)', offset: 0 }),
      style({ transform: 'translateY(-20px)', offset: 0.5 }),
      style({ transform: 'translateY(0)', offset: 1 }),
    ])),
  ]),
]);

/**
 * Shimmer/Skeleton Loading Animation
 * Creates a loading shimmer effect
 */
export const shimmer = trigger('shimmer', [
  state('loading', style({
    opacity: 0.6,
  })),
  transition('loading => loading', [
    animate('1.5s infinite', keyframes([
      style({ opacity: 0.6, offset: 0 }),
      style({ opacity: 1, offset: 0.5 }),
      style({ opacity: 0.6, offset: 1 }),
    ])),
  ]),
]);
