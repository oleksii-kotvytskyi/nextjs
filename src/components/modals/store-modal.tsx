"use client";
import { useState } from "react";
import { useStoreModal } from "@/hooks/use-store-modal";
import axios from "axios";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Modal,
} from "@/components/ui";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1),
});

type FormValuesType = z.infer<typeof formSchema>;

// TODO, move to react-query
export const StoreModal = () => {
  const { isOpen, onClose, onOpen } = useStoreModal();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValuesType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onCloseForm = () => {
    form.reset();
    onClose();
  };

  const onSubmit = async (values: FormValuesType) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/stores", values);
      window.location.assign(`/${res.data.id}`);
    } catch (error) {
      toast.error(String(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={isOpen}
      onClose={onCloseForm}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="E-Commerce"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  disabled={loading}
                  variant="outline"
                  type="reset"
                  onClick={onCloseForm}
                >
                  Cancel
                </Button>
                <Button disabled={loading} type="submit">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
