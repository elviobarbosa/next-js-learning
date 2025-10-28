export enum TipoPessoaEnum {
  FISICA = "FISICA",
  JURIDICA = "JURIDICA",
}
export type TipoPessoa = keyof typeof TipoPessoaEnum;
