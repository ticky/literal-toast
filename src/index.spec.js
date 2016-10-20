/* global describe, it, expect */
import literalToast from './index';

describe('🍞 Literal Toast', () => {
  it('throws if not given the type of arguments it expects', () => {
    expect(() => literalToast()).toThrow();
    expect(() => literalToast('a')).toThrow();
    expect(() => literalToast(3)).toThrow();
    expect(() => literalToast(NaN)).toThrow();
  });

  it('bakes a string literal correctly', () => {
    expect(
      literalToast`This string literal contains some ${'weird substitutions'},
        like ${Infinity}?! and ${NaN}. It's also got some newlines,
        numbers (like ${9}) and is generally kind of unweildy!`
    ).toMatchSnapshot();
  });
});
