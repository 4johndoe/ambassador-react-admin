import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import {Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow} from "@material-ui/core";
import {Link} from "../models/link";
import axios from "axios";

const Links = (props: any) => {
    const [links, setLinks] = useState<Link[]>([]);
    const [page, setPage] = useState(0);
    const perPage = 10;

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`users/${props.match.params.id}/links`);
                // console.log(data)
                setLinks(data);
            }
        )()
    }, []);

    return (
        <Layout>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Code</TableCell>
                        <TableCell>Count</TableCell>
                        <TableCell>Revenue</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {links.slice(page * perPage, (page + 1) * perPage).map(link => {
                        console.log(link)
                        return (
                            <TableRow key={link.id}>
                                <TableCell>{link.id}</TableCell>
                                <TableCell>{link.code}</TableCell>
                                <TableCell>{link.orders?.length ?? 0}</TableCell>
                                <TableCell>{link.orders?.reduce((s, o) => s + o.total, 0) ?? 0}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
                <TableFooter>
                    <TablePagination
                        count={links.length}
                        page={page}
                        onPageChange={(e, newPage) => setPage(newPage)}
                        rowsPerPage={perPage}
                        rowsPerPageOptions={[]}
                    />
                </TableFooter>
            </Table>
        </Layout>
    );
};

export default Links;