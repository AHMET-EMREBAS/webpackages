import { Directive } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map } from 'rxjs';

@Directive({
  selector: '[wpViewport]',
  standalone: true,
  exportAs: 'wpViewport',
})
export class ViewportDirective {
  xSmall$: Observable<boolean> = this.bp
    .observe([Breakpoints.XSmall])
    .pipe(map((value) => value.matches));

  small$: Observable<boolean> = this.bp
    .observe([Breakpoints.Small])
    .pipe(map((value) => value.matches));

  medium$: Observable<boolean> = this.bp
    .observe([Breakpoints.Medium])
    .pipe(map((value) => value.matches));

  large$: Observable<boolean> = this.bp
    .observe([Breakpoints.Large])
    .pipe(map((value) => value.matches));

  xLarge$: Observable<boolean> = this.bp
    .observe([Breakpoints.XLarge])
    .pipe(map((value) => value.matches));

  handset$: Observable<boolean> = this.bp
    .observe([Breakpoints.Handset])
    .pipe(map((value) => value.matches));

  tablet$: Observable<boolean> = this.bp
    .observe([Breakpoints.Tablet])
    .pipe(map((value) => value.matches));

  web$: Observable<boolean> = this.bp
    .observe([Breakpoints.Web])
    .pipe(map((value) => value.matches));

  handsetPortrait$: Observable<boolean> = this.bp
    .observe([Breakpoints.HandsetPortrait])
    .pipe(map((value) => value.matches));

  tabletPortrait$: Observable<boolean> = this.bp
    .observe([Breakpoints.TabletPortrait])
    .pipe(map((value) => value.matches));

  webPortrait$: Observable<boolean> = this.bp
    .observe([Breakpoints.WebPortrait])
    .pipe(map((value) => value.matches));

  handsetLandscape$: Observable<boolean> = this.bp
    .observe([Breakpoints.HandsetLandscape])
    .pipe(map((value) => value.matches));

  tabletLandscape$: Observable<boolean> = this.bp
    .observe([Breakpoints.TabletLandscape])
    .pipe(map((value) => value.matches));

  webLandscape$: Observable<boolean> = this.bp
    .observe([Breakpoints.WebLandscape])
    .pipe(map((value) => value.matches));

  smallScreen$: Observable<boolean> = this.bp
    .observe([
      Breakpoints.Small,
      Breakpoints.XSmall,
      Breakpoints.Handset,
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
    ])
    .pipe(map((value) => value.matches));

  sidenavMode$: Observable<'side' | 'over'> = this.smallScreen$.pipe(
    map((e) => {
      return e ? 'over' : 'side';
    })
  );

  sidenavOpen$: Observable<boolean> = this.smallScreen$.pipe(
    map((e) => {
      return e ? false : true;
    })
  );

  constructor(protected readonly bp: BreakpointObserver) {}
}
