import dynamic from "next/dynamic";
import type { LucideIcon } from "lucide-react";

/**
 * Cria um import dinâmico de um ícone do Lucide React
 * @param iconName - Nome do ícone (ex: "Code", "Users", "Settings")
 * @returns Componente do ícone carregado dinamicamente sem SSR
 */

export const createIconImport = (iconName: string) => {
  return dynamic<LucideIcon>(
    () =>
      import("lucide-react").then((mod) => {
        const Icon = (mod as any)[iconName];
        return Icon;
      }),
    { ssr: false }
  );
};
