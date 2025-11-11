'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { ArrowUpDown } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';


import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export type UserMetric = {
  uid: number;
  userName: string;
  mostVisitedTopic: string;
  lastUserAction: string;
};

export const userMetricColumns: ColumnDef<UserMetric>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'uid',
    header: ({ column }) => (
      <div className="text-center">
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        UID
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue('uid')}</div>
    ),
  },
  {
    accessorKey: 'userName',
    header: ({ column }) => (
      <div className="text-center"><Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        User Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button></div>
    ),
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue('userName')}</div>
    ),
  },
  {
    accessorKey: 'mostVisitedTopic',
    header: ({ column }) => (
      <div className="text-center"><Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Most Visited Topic
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button></div>
    ),
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue('mostVisitedTopic')}
      </div>
    ),
  },
  {
    accessorKey: 'lastUserAction',
    header: ({ column }) => (
      <div className="text-center"><Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Last User Action
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button></div>
    ),
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue('lastUserAction')}
      </div>
    ),
  },
  {
    header: () => <div className="text-center">Actions</div>,
    id: 'actions',
    cell: ({ row }) => {
      const userMetric = row.original;

      return (
        <div className="text-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() =>
                  navigator.clipboard.writeText(userMetric.uid.toString())
                }
              >
                Copy User ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View User</DropdownMenuItem>
              <DropdownMenuItem>View User Details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
