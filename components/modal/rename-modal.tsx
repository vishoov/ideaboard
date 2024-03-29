"use client"

import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogHeader,
 DialogFooter,
 DialogClose,
 DialogTitle,
} from "@/components/ui/dialog";
import { useRenameModal } from "@/store/use-rename-modal";
import { FormEventHandler, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";

export const RenameModal = () =>{


    const {
        isOpen,
        onClose,
        initialValues,
    } = useRenameModal();

    const {mutate, pending}= useApiMutation(api.board.update);
    const [title, settitle] = useState(initialValues.title);

    useEffect(()=>{
        settitle(initialValues.title);
    }, [initialValues.title]);

    const onSubmit:FormEventHandler<HTMLFormElement> = (
        e,
    ) => {
        e.preventDefault();

        mutate({
            id:initialValues.id,
            title,
        })
        .then(()=>{
            toast.success("Board renamed");
            onClose();
        })
        .catch(()=>toast.error("Failed to rename board"))

    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Edit Board Title
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Enter a new title for this board
                </DialogDescription>
                <form onSubmit={onSubmit} className="space-y-4">
                    <Input
                    disabled={pending}
                    required
                    maxLength={60}
                    value={title}
                    onChange={(e)=>settitle(e.target.value)}
                    placeholder="Board Title"

                    />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="outline">
                        Cancel
                        </Button>
                    </DialogClose>
                    <Button disabled={pending} type="submit">
                        Save
                    </Button>
                </DialogFooter>
                </form>
                
            </DialogContent>
        </Dialog>
    );
};