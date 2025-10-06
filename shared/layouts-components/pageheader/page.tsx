"use client";

import React, { useState, Fragment } from 'react';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { Row, Col, Card, Table, Button } from 'react-bootstrap';

const ImpersonationLogs = () => {
    // States for filters
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    // Dummy options for dropdowns - you can replace these with data from your API
    const businessOptions = [
        { value: 'business1', label: 'Business One' },
        { value: 'business2', label: 'Business Two' },
    ];

    const adminOptions = [
        { value: 'admin1', label: 'Super Admin A' },
        { value: 'admin2', label: 'Super Admin B' },
    ];

    const userOptions = [
        { value: 'user1', label: 'User X' },
        { value: 'user2', label: 'User Y' },
    ];

    // Dummy data for the table
    const logData = [
        { id: 1, business: 'Business One', admin: 'Super Admin A', user: 'User X', startTime: '2023-10-27 10:00 AM', endTime: '2023-10-27 10:30 AM', ip: '192.168.1.1' },
        { id: 2, business: 'Business Two', admin: 'Super Admin B', user: 'User Y', startTime: '2023-10-27 11:00 AM', endTime: '2023-10-27 11:15 AM', ip: '192.168.1.2' },
    ];

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            backgroundColor: 'var(--form-control-bg)',
            borderColor: 'var(--input-border)',
            color: 'var(--default-text-color)',
        }),
        singleValue: (provided: any) => ({
            ...provided,
            color: 'var(--default-text-color)',
        }),
        menu: (provided: any) => ({
            ...provided,
            backgroundColor: 'var(--form-control-bg)',
        }),
        option: (provided: any, state: { isSelected: any; isFocused: any; }) => ({
            ...provided,
            backgroundColor: state.isSelected ? 'var(--primary-color)' : state.isFocused ? 'var(--primary01)' : 'var(--form-control-bg)',
            color: state.isSelected ? '#fff' : 'var(--default-text-color)',
        }),
    };

    return (
        <Fragment>
            <Pageheader
                title="Businesses"
                subtitle="Impersonation"
                currentpage="Impersonation Logs"
                activepage="Impersonation Logs"
            />

            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Filters</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="g-3">
                                <Col md={3}><Select styles={customStyles} options={businessOptions} placeholder="Business Name" /></Col>
                                <Col md={3}><Select styles={customStyles} options={adminOptions} placeholder="Super Admin" /></Col>
                                <Col md={2}><Select styles={customStyles} options={userOptions} placeholder="User" /></Col>
                                <Col md={2}>
                                    <DatePicker
                                        selectsRange={true}
                                        startDate={startDate}
                                        endDate={endDate}
                                        onChange={(update: [Date | null, Date | null]) => {
                                            const [start, end] = update;
                                            setStartDate(start);
                                            setEndDate(end);
                                        }}
                                        isClearable={true}
                                        placeholderText="Date Range"
                                        className="form-control"
                                    />
                                </Col>
                                <Col md={2}><Button variant="primary" className="w-100">Apply</Button></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Impersonation Logs</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead><tr><th>Business</th><th>Super Admin</th><th>User</th><th>Start Time</th><th>End Time</th><th>IP Address</th></tr></thead>
                                    <tbody>{logData.map(log => (<tr key={log.id}><td>{log.business}</td><td>{log.admin}</td><td>{log.user}</td><td>{log.startTime}</td><td>{log.endTime}</td><td>{log.ip}</td></tr>))}</tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default ImpersonationLogs;