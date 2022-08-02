import * as yup from "yup";

export const hatSchema = yup.object({
  body: yup.object({
    name: yup.string(),
    color_hat: yup.string(),
    cintillo: yup
      .string()
      .oneOf(["si", "Si", "no", "No", ""], 'Solo escriba "si" ó "no"'),
    tafalete: yup
      .string()
      .oneOf(["si", "Si", "no", "No", ""], 'Solo escriba "si" ó "no"'),
    measure: yup.string(),
    color_tape: yup.string(),
    size: yup.string(),
    state: yup
      .string()
      .oneOf(
        ["1", "2", "3", "4", "5", ""],
        'Solo escriba "1", "2", "3", "4" ó "5"'
      ),
    price: yup.string(),
    advancement: yup.string(),
    address: yup.string(),
    observations: yup.string(),
    state_payment: yup
      .string()
      .oneOf(["c", "p", "C", "P", ""], 'Solo escriba "p" ó "c"'),
  }),
});
