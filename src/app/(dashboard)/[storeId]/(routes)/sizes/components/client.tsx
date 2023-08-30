"use client";

import {
  ApiList,
  Button,
  DataTable,
  Heading,
  Separator,
} from "@/components/ui";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { SizeColumn, columns } from "./columns";

interface SizeClientProps {
  data: SizeColumn[];
}

export const SizesClient = ({ data }: SizeClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage sizes for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title={"API"} description={"API calls for the Sizes"} />
      <ApiList entityName="sizes" entityIdName="sizeId" />
    </>
  );
};
