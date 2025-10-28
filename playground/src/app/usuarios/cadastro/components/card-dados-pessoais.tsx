"use client";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  cadastroDadosPessoaisSchema,
  type CadastroDadosPessoais,
} from "../schemas/cadastro-dados-pessoais.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TipoPessoa, TipoPessoaEnum } from "../entities/cadastro.entities";

const CardDadosPessoais = () => {
  const form = useForm<CadastroDadosPessoais>({
    resolver: zodResolver(cadastroDadosPessoaisSchema),
    defaultValues: {
      nomeRazaoSocial: "",
      tipoPessoa: TipoPessoaEnum.FISICA,
      email: "",
      cpf: "",
      cnpj: "",
    },
  });

  const [tipoPessoa, setTipoPessoa] = useState<TipoPessoa>(
    TipoPessoaEnum.FISICA
  );

  const onSubmit = (data: CadastroDadosPessoais) => {
    console.log("Dados enviados:", data);
  };

  return (
    <Card className="p-4 mb-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-medium">Dados pessoais</h3>
      </div>

      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="tipoPessoa"
              render={({ field }) => (
                <FormItem className="mb-6 d-block">
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={(value: TipoPessoa) => {
                        field.onChange(value);
                        setTipoPessoa(value);
                      }}
                      className="flex"
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="FISICA" id="fisica" />
                        <FormLabel htmlFor="fisica" className="font-normal">
                          Pessoa Física
                        </FormLabel>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="JURIDICA" id="juridica" />
                        <FormLabel htmlFor="juridica" className="font-normal">
                          Pessoa Jurídica
                        </FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="nomeRazaoSocial"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome / Razão Social</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite o nome ou razão social"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite o e-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {tipoPessoa === TipoPessoaEnum.FISICA && (
                <FormField
                  control={form.control}
                  name="cpf"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CPF</FormLabel>
                      <FormControl>
                        <Input placeholder="000.000.000-00" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {tipoPessoa === TipoPessoaEnum.JURIDICA && (
                <FormField
                  control={form.control}
                  name="cnpj"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CNPJ</FormLabel>
                      <FormControl>
                        <Input placeholder="00.000.000/0000-00" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>
          </form>
        </Form>
      </div>
    </Card>
  );
};

export default CardDadosPessoais;
