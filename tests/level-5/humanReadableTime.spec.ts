import { describe, it, expect } from 'vitest';
import { humanReadableTime } from '../../src/level-5/humanReadable.v2';

describe('humanReadableTime', () => {
  it('should format 0 seconds as 00:00:00', () => {
    expect(humanReadableTime(0)).toBe('00:00:00');
  });

  it('should format 59 seconds as 00:00:59', () => {
    expect(humanReadableTime(59)).toBe('00:00:59');
  });

  it('should format 60 seconds as 00:01:00', () => {
    expect(humanReadableTime(60)).toBe('00:01:00');
  });

  it('should format 3599 seconds as 00:59:59', () => {
    expect(humanReadableTime(3599)).toBe('00:59:59');
  });

  it('should format 3600 seconds as 01:00:00', () => {
    expect(humanReadableTime(3600)).toBe('01:00:00');
  });

  it('should format 86399 seconds as 23:59:59', () => {
    expect(humanReadableTime(86399)).toBe('23:59:59');
  });

  it('should format 86400 seconds as 24:00:00', () => {
    expect(humanReadableTime(86400)).toBe('24:00:00');
  });

  it('should format 359999 seconds as 99:59:59', () => {
    expect(humanReadableTime(359999)).toBe('99:59:59');
  });
});