export default function(literals, ...values) {
  // Integrity check: if literals and values aren't real, bail
  if (!(literals instanceof Array) || !(values instanceof Array)) {
    throw new TypeError(`literal-toast: This doesn't seem to be a template literal!`);
  }

  return literals.reduce(
    (toast, string, index) => {
      toast += string;
      if (index < values.length) {
        toast += values[index];
      }
      return toast;
    },
    ''
  );
}
