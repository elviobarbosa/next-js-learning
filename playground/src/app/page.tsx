import { MainLayout } from "@/components/ui/layout/main-layout";

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Bem-vindo ao seu painel de controle
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold">Card 1</h3>
            <p className="text-sm text-muted-foreground">
              Conteúdo do primeiro card
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold">Card 2</h3>
            <p className="text-sm text-muted-foreground">
              Conteúdo do segundo card
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold">Card 3</h3>
            <p className="text-sm text-muted-foreground">
              Conteúdo do terceiro card
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
