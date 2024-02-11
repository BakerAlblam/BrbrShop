import connectToDB from '@/lib/MongoDb';
import Book from '@/models/booking';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Data = {
  name: string;
  email: string;
  phone: number;
  time: string;
  _id: string;
  createdAt: string;
};

export default async function Page() {
  await connectToDB();
  const res = await Book.find().sort({ createdAt: -1 });
  const data = res;

  return (
    <main className="mx-2 lg:mx-6 md:mx-4 xl:mx-10 bg-slate-800 text-white rounded-md mt-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead className="text-right">Date</TableHead>
            <TableHead className="text-right">Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((invoice: Data) => (
            <TableRow key={invoice._id}>
              <TableCell className="font-medium flex flex-col overflow-hidden">
                {invoice.name}
              </TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell>{invoice.phone}</TableCell>
              <TableCell className="text-right">
                {new Date(invoice.time).toLocaleString('en-US', {
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                })}
              </TableCell>
              <TableCell className="text-right">
                {new Date(invoice.createdAt).toLocaleString('en-US', {
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </main>
  );
}
