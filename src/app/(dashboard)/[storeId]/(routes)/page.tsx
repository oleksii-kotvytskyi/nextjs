import prismadb from "@/lib/prisma-db";

interface DashboardProps {
  params: { storeId: string };
}

const DashboardPage = async ({ params }: DashboardProps) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>Active Store (store-name): {store?.name}</div>;
};

export default DashboardPage;
