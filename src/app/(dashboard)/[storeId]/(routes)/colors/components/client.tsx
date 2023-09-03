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
import { ColorColumn, columns } from "./columns";

interface ColorClientProps {
  data: ColorColumn[];
}

export const ColorsClient = ({ data }: ColorClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Colors (${data.length})`}
          description="Manage colors for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title={"API"} description={"API calls for the Colors"} />
      <ApiList entityName="colors" entityIdName="colorId" />
    </>
  );
};
