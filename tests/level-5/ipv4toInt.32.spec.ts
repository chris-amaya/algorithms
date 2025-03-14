import { IPv4ToInt32 } from 'src/level-5/ipv4toInt32.v2'

describe('IPv4ToInt32', () => {
  it('should convert IPv4 address to 32-bit integer', () => {
    expect(IPv4ToInt32('128.32.10.1')).toBe(2149583361);
  });

  it('should convert another IPv4 address to 32-bit integer', () => {
    expect(IPv4ToInt32('192.168.0.1')).toBe(3232235521);
  });

  it('should convert yet another IPv4 address to 32-bit integer', () => {
    expect(IPv4ToInt32('0.0.0.0')).toBe(0);
  });

  it('should convert the maximum IPv4 address to 32-bit integer', () => {
    expect(IPv4ToInt32('255.255.255.255')).toBe(4294967295);
  });

  it('should convert a simple IPv4 address to 32-bit integer', () => {
    expect(IPv4ToInt32('1.1.1.1')).toBe(16843009);
  });

  it('should convert another simple IPv4 address to 32-bit integer', () => {
    expect(IPv4ToInt32('10.0.0.1')).toBe(167772161);
  });

  it('should convert an IPv4 address with mixed octets to 32-bit integer', () => {
    expect(IPv4ToInt32('172.16.254.1')).toBe(2886794753);
  });

  it('should convert an IPv4 address with leading zeros to 32-bit integer', () => {
    expect(IPv4ToInt32('001.002.003.004')).toBe(16909060);
  });
});