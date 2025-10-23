import { z } from "zod";

export const cadastroDadosPessoaisSchema = z.object({
  nomeRazaoSocial: z
    .string()
    .min(2, "O Nome/Razão Social deve ter no mínimo 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  cpf: z.string().min(11, "CPF inválido").max(11, "CPF inválido"),
  cnpj: z.string().min(14, "CNPJ inválido").max(14, "CNPJ inválido"),
});

export type CadastroDadosPessoais = z.infer<typeof cadastroDadosPessoaisSchema>;
