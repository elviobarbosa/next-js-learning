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

const CardDadosPessoais = () => {
  const form = useForm<CadastroDadosPessoais>({
    resolver: zodResolver(cadastroDadosPessoaisSchema),
    defaultValues: {
      nomeRazaoSocial: "",
      email: "",
      cpf: "",
      cnpj: "",
    },
  });

  const onSubmit = (data: CadastroDadosPessoais) => {
    console.log("Dados enviados:", data);
  };

  return (
    <Card className="p-4 mb-4 ">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-medium">Dados pessoais</h3>
      </div>

      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

            {/* Email */}
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

            {/* CPF */}
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
          </form>
        </Form>
      </div>
    </Card>
  );
};

export default CardDadosPessoais;
