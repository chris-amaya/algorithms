import { describe, it, expect } from 'vitest';
import { ipToNum, numToIp } from '../src/level-5/ipAddToNum.v2';

describe('IP Address Conversion', () => {
    describe('ipToNum', () => {
        it('should convert 192.168.1.1 to 3232235777', () => {
            expect(ipToNum('192.168.1.1')).toBe(3232235777);
        });

        it('should convert 10.0.0.0 to 167772160', () => {
            expect(ipToNum('10.0.0.0')).toBe(167772160);
        });

        it('should convert 176.16.0.1 to 2953838593', () => {
            expect(ipToNum('176.16.0.1')).toBe(2953838593);
        });

        it('should convert 0.0.0.0 to 0', () => {
            expect(ipToNum('0.0.0.0')).toBe(0);
        });

        it('should convert 255.255.255.255 to 4294967295', () => {
            expect(ipToNum('255.255.255.255')).toBe(4294967295);
        });
    });

    describe('numToIp', () => {
        it('should convert 3232235777 to 192.168.1.1', () => {
            expect(numToIp(3232235777)).toBe('192.168.1.1');
        });

        it('should convert 167772160 to 10.0.0.0', () => {
            expect(numToIp(167772160)).toBe('10.0.0.0');
        });

        it('should convert 2953838593 to 176.16.0.1', () => {
            expect(numToIp(2953838593)).toBe('176.16.0.1');
        });

        it('should convert 0 to 0.0.0.0', () => {
            expect(numToIp(0)).toBe('0.0.0.0');
        });

        it('should convert 4294967295 to 255.255.255.255', () => {
            expect(numToIp(4294967295)).toBe('255.255.255.255');
        });
    });
});