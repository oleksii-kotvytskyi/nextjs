import prismadb from "@/lib/prisma-db";
import ProductForm from "./components/product-form";

const ProductPage = async ({
  params,
}: {
  params: { productId: string; storeId: string };
}) => {
  const product = await prismadb.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      images: true,
    },
  });
  // TODO, move request to db to separate component and add Loading state
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
  });
  // TODO, move request to db to separate component and add Loading state
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
  });
  // TODO, move request to db to separate component and add Loading state
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm
          initialData={product}
          categories={categories}
          colors={colors}
          sizes={sizes}
        />
      </div>
    </div>
  );
};

export default ProductPage;
