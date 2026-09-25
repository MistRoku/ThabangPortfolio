import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { ProjectsComponent } from './projects.component';
import { SkillsComponent } from '../skills/skills.component';

const here = dirname(fileURLToPath(import.meta.url));
const projectsHtml = readFileSync(join(here, 'projects.component.html'), 'utf8');
const skillsHtml = readFileSync(join(here, '..', 'skills', 'skills.component.html'), 'utf8');

describe('Projects page renders content, not stuck skeletons', () => {
  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    TestBed.overrideComponent(ProjectsComponent, {
      set: { template: projectsHtml, styleUrls: [] },
    });
  });

  it('shows project cards after render', async () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const cards = el.querySelectorAll('.project-card');
    const skeletons = el.querySelectorAll('.skeleton-card');
    expect(cards.length).toBeGreaterThan(0);
    expect(skeletons.length).toBe(0);
    expect(el.textContent).toContain('Crown and Clipper');
  });
});

describe('Skills page renders content, not stuck skeletons', () => {
  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    TestBed.overrideComponent(SkillsComponent, {
      set: { template: skillsHtml, styleUrls: [] },
    });
  });

  it('shows skill groups after render', async () => {
    const fixture = TestBed.createComponent(SkillsComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('.skill-group').length).toBeGreaterThan(0);
    expect(el.querySelectorAll('.skeleton-card').length).toBe(0);
    expect(el.textContent).toContain('Languages');
  });
});
