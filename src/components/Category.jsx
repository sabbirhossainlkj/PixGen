import { Button } from "@heroui/react";
import Link from "next/link";

const Category = async() => {
    const res = await fetch ('https://pix-gen-wgpy.vercel.app/category.json')
    const categoris= await res.json();
    return (
        <div className="my-3 space-x-3">
            {
                categoris.map(category => {
                    return <Link key={category.id} href={`?category=${category.name}`}> <Button size="sm" variant="outline"  >{category.name}</Button></Link>
                })
            }
        </div>
    );
};

export default Category;