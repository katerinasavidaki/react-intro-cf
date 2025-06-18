import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {useEffect, useState} from "react";
import {deleteProduct, getProducts, type Product} from "@/api/products.ts";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router";
import {Pencil, Trash} from "lucide-react";
import { toast } from "sonner";


const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [deleting, setDeleting] = useState<number | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .finally(() => setLoading(false))
    }, []);

    const handleDelete = async (id: number) => {
        if (!window.confirm("Do you want to delete this product?")) {
            setDeleting(id)
        }
        try {
            await deleteProduct(id);
            setProducts((prev) => prev.filter((product) => product.id !== id));
            toast.success("Product deleted successfully");
        } catch (error) {
            toast.error("Error deleting product" + id);
        } finally {
            setDeleting(null);
        }

    }

    if (loading) return <div className="text-center p-8">Loading...</div>

    return(
        <>
            <div className="p-8">
                <Table>
                    <TableCaption>A list of your products.</TableCaption>
                    <TableHeader className="bg-gray-50">
                        <TableRow>
                            <TableHead>#</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.price} €</TableCell>
                                <TableCell className="text-right space-x-2">
                                    <Button
                                        onClick={() => navigate(`/products/${product.id}`)}
                                        variant="outline"
                                        className="cursor-pointer"
                                    >
                                        <Pencil/>
                                    </Button>
                                    <Button
                                        onClick={() => handleDelete(product.id)}
                                        disabled={deleting === product.id}
                                        variant="destructive"
                                        className="cursor-pointer"
                                    >
                                        <Trash/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default ProductList;