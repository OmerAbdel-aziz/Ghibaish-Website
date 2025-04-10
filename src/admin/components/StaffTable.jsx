import { useState, useEffect } from "react";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "../../components/ui/table";
import { supabase } from "../../utils/supabase";

const StaffTable = () => {
  const [staff, setStaff] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const { data, error } = await supabase
          .from("staff")
          .select("id, name_en, role_en"); // Select only needed fields

        if (error) {
          throw new Error(error.message);
        }

        setStaff(data);
      } catch (error) {
        setError("Could not fetch staff: " + error.message);
        setStaff([]);
        console.error(error);
      }
    };

    fetchStaff();
  }, []);

  // Sort staff alphabetically by English name (optional)
  const sortedStaff = staff.sort((a, b) => a.name_en.localeCompare(b.name_en));

  return (
    <div className="p-5 w-full px-10">
      <h3 className="text-lg md:text-2xl font-semibold mb-5">Staff Members</h3>
      <Table>
        <TableCaption>A list of staff members.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Role</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedStaff.map((member) => (
            <TableRow key={member.id}>
              <TableCell className="font-medium">
                {member.name_en || "Unnamed"}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {member.role_en || "No role specified"}
              </TableCell>
              <TableCell className="text-right">
                <a
                  href={`/admin/edit-staff/${member.id}`}
                  className="inline-flex flex-row-reverse gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300 hidden md:inline-flex relative bottom-0"
                >
                  Edit Staff / تعديل عضو الهيئة
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default StaffTable;
