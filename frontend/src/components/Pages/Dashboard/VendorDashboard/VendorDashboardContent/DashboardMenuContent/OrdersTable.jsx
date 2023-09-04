import React, { useState } from "react";
import {
  Table,
  Pagination,
  Dropdown,
  Container,
  Row,
  Col,
  Form,
  Badge,
} from "react-bootstrap";

const initialData = [
  {
    id: 1,
    date: "2023-09-01",
    totalPrice: "$100.00",
    charges: "$5.00",
    received: "$105.00",
    status: "In Progress",
  },
  {
    id: 2,
    date: "2023-09-02",
    totalPrice: "$150.00",
    charges: "$6.00",
    received: "$156.00",
    status: "Completed",
  },
  {
    id: 3,
    date: "2023-09-03",
    totalPrice: "$80.00",
    charges: "$4.00",
    received: "$84.00",
    status: "Cancelled",
  },
  {
    id: 4,
    date: "2023-09-04",
    totalPrice: "$120.00",
    charges: "$5.00",
    received: "$125.00",
    status: "In Progress",
  },
  {
    id: 5,
    date: "2023-09-05",
    totalPrice: "$200.00",
    charges: "$8.00",
    received: "$208.00",
    status: "Completed",
  },
];

const OrdersTable = () => {
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterDate, setFilterDate] = useState("");

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterData = () => {
    let filteredData = initialData;

    if (filterStatus !== "All") {
      filteredData = filteredData.filter(
        (order) => order.status === filterStatus
      );
    }

    if (filterDate) {
      filteredData = filteredData.filter((order) => order.date === filterDate);
    }

    return filteredData;
  };

  const totalPages = Math.ceil(
    (filterData().length || initialData.length) / itemsPerPage
  );

  return (
    <Container style={{ fontSize: "14px" }}>
      <Row className="mb-3">
        <Col xs={12} lg={6}>
          <h6>RECENT ORDERS</h6>
        </Col>
        <Col xs={12} lg={6} className="d-flex justify-content-end">
          <Form className="me-2">
            <Form.Control
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              style={{ fontSize: "12px", zIndex: "23" }}
            />
          </Form>
          <Form className="me-2">
            <Dropdown>
              <Dropdown.Toggle
                variant="dark"
                id="dropdown-basic"
                style={{ fontSize: "12px" }}
              >
                {filterStatus === "All" ? "Select Orders Status" : filterStatus}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setFilterStatus("All")}>
                  All
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterStatus("In Progress")}>
                  In Progress
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterStatus("Completed")}>
                  Completed
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterStatus("Cancelled")}>
                  Cancelled
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </Col>
      </Row>
      <div className="table-responsive">
        <Table style={{ backgroundColor: "transparent" }}>
          <thead>
            <tr style={{ fontSize: "13px" }}>
              <th className="d-none d-lg-table-cell">#</th>
              <th>DATE</th>
              <th>TOTAL PRICE</th>
              <th>CHARGES</th>
              <th>RECEIVED</th>
              <th>STATUS</th>
              <th>DETAIL</th>
            </tr>
          </thead>
          <tbody>
            {filterData()
              .slice(indexOfFirstItem, indexOfLastItem)
              .map((order) => (
                <tr key={order.id}>
                  <td className="d-none d-lg-table-cell">{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.totalPrice}</td>
                  <td>{order.charges}</td>
                  <td>{order.received}</td>
                  <td>
                    {order.status === "Completed" && (
                      <Badge bg="success" style={{ width: "80px" }}>
                        Completed
                      </Badge>
                    )}
                    {order.status === "In Progress" && (
                      <Badge bg="primary" style={{ width: "80px" }}>
                        In Progress
                      </Badge>
                    )}
                    {order.status === "Cancelled" && (
                      <Badge bg="danger" style={{ width: "80px" }}>
                        Cancelled
                      </Badge>
                    )}
                  </td>
                  <td>
                    <a href={`/order/${order.id}`} style={{ color: "#3ab54b" }}>
                      Detail
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      <Pagination>
        {[...Array(totalPages).keys()].map((number) => (
          <Pagination.Item
            key={number}
            active={number + 1 === currentPage}
            onClick={() => paginate(number + 1)}
          >
            {number + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default OrdersTable;
