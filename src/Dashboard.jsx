
import React, { useState } from 'react';
import {
    Layout,
    Menu,
    Input,
    Button,
    Avatar,
    Badge,
    Typography,
    Row,
    Col,
    Card,
    Statistic,
    List,
    Tag,
    Table,
    Checkbox,
    Progress,
    theme,
    ConfigProvider,
    Space
} from 'antd';
import {
    HomeOutlined,
    CalendarOutlined,
    CheckSquareOutlined,
    SolutionOutlined,
    TeamOutlined,
    FileTextOutlined,
    UserOutlined,
    SettingOutlined,
    QuestionCircleOutlined,
    BellOutlined,
    SearchOutlined,
    ArrowUpOutlined,
    MoreOutlined,
    UsergroupAddOutlined,
    FileProtectOutlined,
    SafetyCertificateOutlined,
    RiseOutlined,
    PlusOutlined,
    GlobalOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

// Mock Data
const statsData = [
    { title: 'Total Candidates', value: 421, trend: 12, icon: <UsergroupAddOutlined /> },
    { title: 'Candidate Interviewed', value: 240, trend: 12, icon: <TeamOutlined /> },
    { title: 'Active Jobs', value: 124, trend: 12, icon: <SolutionOutlined /> },
    { title: 'Offer Accepted', value: 210, trend: 12, icon: <FileProtectOutlined /> },
];

const tasksData = [
    { title: 'Join the Teacher Growth Workshop', assignee: 'John Freed', status: 'Overdue', date: 'Fri, 14 Feb', assigneeAvatar: 'J' },
    { title: 'Get Midterm Materials Ready', assignee: 'Panji Dwi', status: 'Todo', date: 'Thu, 13 Feb', assigneeAvatar: 'P' },
    { title: 'Interview feedback for JC', assignee: 'Luca Modric', status: 'Doing', date: 'Wed, 12 Feb', assigneeAvatar: 'L' },
    { title: 'Update Student Progress Reports', assignee: 'Yahyo', status: 'Doing', date: 'Wed, 12 Feb', assigneeAvatar: 'Y' },
    { title: 'Catch Up with the Curriculum Team', assignee: 'Aditya Irawan', status: 'Doing', date: 'Thu, 13 Feb', assigneeAvatar: 'A' },
];

const interviewsData = [
    { day: '17', time: '09:00AM - 10:00AM', name: 'Ahmad Zainy', timezone: 'GMT+8' },
    { day: '17', time: '11:00AM - 12:00AM', name: 'Yahyo', timezone: 'GMT+7' },
    { day: '17', time: '01:00PM - 02:00PM', name: 'Tea Assiddiq', timezone: 'GMT+9', active: true },
    { day: '18', time: '11:00AM - 12:00AM', name: 'Ahmad Zainy', timezone: 'GMT+1' },
    { day: '19', time: '01:00PM - 02:00PM', name: 'Panji Dwi', timezone: 'GMT+8' },
    { day: '19', time: '02:00PM - 03:00PM', name: 'Panji Dwi', timezone: 'GMT+8' },
];

const complianceData = [
    { name: 'Tea Assiddiq', progress: 50 },
    { name: 'Rizki Kurniawan', progress: 25 },
    { name: 'Taufik Hidayat', progress: 80 },
    { name: 'Mufti Hidayat', progress: 25 },
    { name: 'Wildan Athok', progress: 10 },
];

const applicantsData = [
    { name: 'Liam Carter', role: 'IT Support for School', avatar: 'L' },
    { name: 'Aditya Irawan', role: 'Math Teacher', avatar: 'A' },
    { name: 'Jamal Mahfud', role: 'IT Support for School', avatar: 'J' },
    { name: 'Mason Turner', role: 'School Administrator', avatar: 'M' },
    { name: 'Panji Dwi', role: 'Teacher Assistant', avatar: 'P' },
];

// Components
const StatCard = ({ title, value, trend, icon }) => {
    return (
        <Card bordered={false} style={{ height: '100%', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <Space direction="vertical" style={{ width: '100%' }} size={0}>
                <Space style={{ width: '100%', justifyContent: 'space-between', color: '#8c8c8c' }}>
                    <Space>
                        {icon}
                        <Text type="secondary">{title}</Text>
                    </Space>
                    <MoreOutlined style={{ transform: 'rotate(90deg)' }} />
                </Space>

                <Space align="baseline" style={{ marginTop: 8 }}>
                    <Title level={2} style={{ margin: 0 }}>{value}</Title>
                    <Text type="success" style={{ fontSize: 12 }}>
                        <ArrowUpOutlined /> {trend}% vs last week
                    </Text>
                </Space>

                {/* Fake Charts */}
                <div style={{ display: 'flex', alignItems: 'flex-end', height: 40, marginTop: 16, gap: 8 }}>
                    {[30, 45, 20, 60, 40, 80, 50].map((h, i) => (
                        <div key={i} style={{
                            width: '12%',
                            height: `${h}%`,
                            backgroundColor: i === 5 ? '#1677ff' : '#f0f0f0',
                            borderRadius: 4
                        }} />
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                        <Text key={i} type="secondary" style={{ fontSize: 10, width: '12%', textAlign: 'center' }}>{d}</Text>
                    ))}
                </div>
            </Space>
        </Card>
    );
};

const CustomDashboard = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [collapsed, setCollapsed] = useState(false);

    // Menu Items
    const items = [
        { key: 'home', icon: <HomeOutlined />, label: 'Home' },
        { key: 'calendar', icon: <CalendarOutlined />, label: 'Calendar', labelRight: <Tag>16</Tag> },
        { key: 'task', icon: <CheckSquareOutlined />, label: 'Task' },
        {
            type: 'group', label: 'TALENT & RECRUITMENT', children: [
                { key: 'jobs', icon: <SolutionOutlined />, label: 'Jobs' },
                { key: 'interviews', icon: <TeamOutlined />, label: 'Interviews' },
                { key: 'offers', icon: <FileTextOutlined />, label: 'Offers' },
                { key: 'visa', icon: <SafetyCertificateOutlined />, label: 'Visa' },
                { key: 'candidates', icon: <UsergroupAddOutlined />, label: 'Candidates' },
            ]
        },
        {
            type: 'group', label: 'INTERNAL', children: [
                { key: 'staff', icon: <UserOutlined />, label: 'Staff' },
                { key: 'compliance', icon: <FileProtectOutlined />, label: 'Compliance' },
            ]
        },
        // Management...
        {
            type: 'group', label: 'MANAGEMENT', children: [
                { key: 'report', icon: <FileTextOutlined />, label: 'Report' },
                { key: 'users', icon: <UserOutlined />, label: 'Users' },
            ]
        },
        { type: 'divider' },
        { key: 'preferences', icon: <SettingOutlined />, label: 'Preferences' },
        { key: 'help', icon: <QuestionCircleOutlined />, label: 'Help & Support' },
    ];

    // Table Columns for Tasks
    const taskColumns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text, record) => (
                <Space>
                    <Checkbox />
                    <Text style={record.status === 'Overdue' ? { color: '#ff4d4f' } : {}}>{text}</Text>
                </Space>
            ),
        },
        {
            title: 'Assigned To',
            dataIndex: 'assignee',
            key: 'assignee',
            render: (text, record) => (
                <Space>
                    <Avatar size="small" style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>{record.assigneeAvatar}</Avatar>
                    <Text>{text}</Text>
                </Space>
            ),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                let color = 'default';
                if (status === 'Overdue') color = 'error';
                if (status === 'Doing') color = 'processing';
                return (
                    <Tag color={color} style={{ minWidth: 60, textAlign: 'center' }}>
                        {status}
                    </Tag>
                );
            },
        },
        {
            title: 'Due Date',
            dataIndex: 'date',
            key: 'date',
            align: 'right',
            render: (text) => <Text type="secondary">{text}</Text>,
        },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                width={260}
                theme="light"
                breakpoint="lg"
                collapsedWidth="0"
                style={{
                    borderRight: '1px solid #f0f0f0',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    zIndex: 100
                }}
            >
                <div style={{ height: 64, margin: 16, display: 'flex', alignItems: 'center', gap: 8, fontSize: 18, fontWeight: 'bold' }}>
                    <SafetyCertificateOutlined style={{ fontSize: 24, color: '#696cff' }} /> HRAIN
                </div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['home']}
                    style={{ borderRight: 0 }}
                    items={items.map(item => {
                        if (item.type === 'group' || item.type === 'divider') return item;
                        return {
                            ...item,
                            label: (
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    {item.label}
                                    {/* Hardcoded tags for demo */}
                                    {item.key === 'calendar' && <Tag bordered={false} style={{ borderRadius: 10 }}>16</Tag>}
                                    {item.key === 'task' && <Tag bordered={false} style={{ borderRadius: 10 }}>40</Tag>}
                                    {item.key === 'jobs' && <Tag bordered={false} style={{ borderRadius: 10 }}>120</Tag>}
                                </div>
                            )
                        }
                    })}
                />
            </Sider>
            <Layout style={{ marginLeft: 260, padding: '0 24px 24px' }}>
                <Header style={{
                    background: colorBgContainer,
                    padding: '0 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    top: 0,
                    zIndex: 99,
                    borderBottom: '1px solid #f0f0f0'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <Text strong style={{ fontSize: 16 }}>Home</Text>
                    </div>

                    <Input
                        prefix={<SearchOutlined style={{ color: '#ccc' }} />}
                        placeholder="Search..."
                        style={{ width: 400, borderRadius: 8, background: '#f5f5f5', border: 'none' }}
                    />

                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <Button type="primary" style={{ background: '#696cff', borderRadius: 8 }} icon={<RiseOutlined />}>Upgrade</Button>
                        <Badge count={2} size="small">
                            <Button shape="circle" icon={<BellOutlined />} />
                        </Badge>
                        <Avatar style={{ backgroundColor: '#87d068' }}>V</Avatar>
                    </div>
                </Header>

                <Content style={{ margin: '24px 0 0', minHeight: 280 }}>
                    <Title level={3} style={{ fontWeight: 'normal', margin: '0 0 24px' }}>
                        Hello <span style={{ fontWeight: 'bold' }}>Virgil Varelino</span>, Welcome Back
                    </Title>

                    {/* Stats Row */}
                    <Row gutter={[24, 24]}>
                        {statsData.map((stat, index) => (
                            <Col xs={24} sm={12} lg={6} key={index}>
                                <StatCard {...stat} />
                            </Col>
                        ))}
                    </Row>

                    <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
                        {/* Upcoming Tasks */}
                        <Col xs={24} lg={16}>
                            <Card
                                title={<span><CheckSquareOutlined /> Upcoming Task</span>}
                                extra={<a href="#" style={{ color: '#1677ff', fontWeight: 500 }}>View more &gt;</a>}
                                bordered={false}
                                style={{ borderRadius: 12, height: '100%', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                                bodyStyle={{ padding: 0 }}
                            >
                                <Table
                                    columns={taskColumns}
                                    dataSource={tasksData}
                                    pagination={false}
                                    rowKey="title"
                                    size="middle"
                                />
                                <Button type="text" icon={<PlusOutlined />} style={{ margin: '12px 24px' }}>Add task</Button>
                            </Card>
                        </Col>

                        {/* Upcoming Interview */}
                        <Col xs={24} lg={8}>
                            <Card
                                title={<span><TeamOutlined /> Upcoming Interview</span>}
                                extra={<a href="#" style={{ color: '#1677ff', fontWeight: 500 }}>View more &gt;</a>}
                                bordered={false}
                                style={{ borderRadius: 12, height: '100%', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                            >
                                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <Tag style={{ fontSize: 14, padding: '4px 12px' }}>February 2025</Tag>
                                    </div>
                                    {/* Timeline-ish list */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                        {interviewsData.map((interview, idx) => (
                                            <div key={idx} style={{ display: 'flex', gap: 16 }}>
                                                <div style={{
                                                    minWidth: 48, height: 48,
                                                    borderRadius: 8, background: '#f5f5f5',
                                                    display: 'flex', flexDirection: 'column',
                                                    alignItems: 'center', justifyContent: 'center',
                                                    fontWeight: 'bold',
                                                    flexShrink: 0
                                                }}>
                                                    <span style={{ fontSize: 11, color: '#888' }}>Thu</span>
                                                    <span style={{ fontSize: 16 }}>{interview.day}</span>
                                                </div>
                                                <div style={{
                                                    flex: 1,
                                                    border: `1px solid ${interview.active ? '#1677ff' : '#f0f0f0'}`,
                                                    borderRadius: 12,
                                                    padding: '12px 16px',
                                                    background: interview.active ? '#e6f7ff' : '#fff',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center'
                                                }}>
                                                    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{interview.time}</div>
                                                    <div style={{ color: '#666', fontSize: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                                                        <span><GlobalOutlined /> {interview.timezone}</span>
                                                        <span><UserOutlined /> {interview.name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Space>
                            </Card>
                        </Col>
                    </Row>

                    <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
                        {/* Compliance */}
                        <Col xs={24} lg={10}>
                            <Card
                                title={<span><FileProtectOutlined /> Compliance</span>}
                                extra={<a href="#" style={{ color: '#1677ff', fontWeight: 500 }}>View more &gt;</a>}
                                bordered={false}
                                style={{ borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                            >
                                <List
                                    itemLayout="horizontal"
                                    dataSource={complianceData}
                                    renderItem={(item) => (
                                        <List.Item style={{ border: 'none', padding: '12px 0' }}>
                                            <List.Item.Meta
                                                avatar={<Avatar size="small">{item.name[0]}</Avatar>}
                                                title={item.name}
                                            />
                                            <div style={{ width: 150, display: 'flex', alignItems: 'center', gap: 8 }}>
                                                <Progress percent={item.progress} size="small" status="active" />
                                            </div>
                                        </List.Item>
                                    )}
                                />
                            </Card>
                        </Col>

                        {/* Latest Applicant */}
                        <Col xs={24} lg={14}>
                            <Card
                                title={<span><UsergroupAddOutlined /> Latest Applicant</span>}
                                extra={<a href="#" style={{ color: '#1677ff', fontWeight: 500 }}>View more &gt;</a>}
                                bordered={false}
                                style={{ borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                            >
                                <List
                                    itemLayout="horizontal"
                                    dataSource={applicantsData}
                                    renderItem={(item) => (
                                        <List.Item style={{ border: 'none', padding: '12px 0' }}>
                                            <List.Item.Meta
                                                avatar={<Avatar style={{ backgroundColor: '#ccc' }}>{item.avatar}</Avatar>}
                                                title={<Text strong>{item.name}</Text>}
                                                description={item.role}
                                            />
                                            <Button>View</Button>
                                        </List.Item>
                                    )}
                                />
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Layout>
    );
};

const App = () => {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.defaultAlgorithm,
                token: {
                    colorPrimary: '#696cff',
                    borderRadius: 8,
                    fontFamily: 'Inter, sans-serif',
                },
                components: {
                    Card: {
                        headerFontSize: 16,
                        headerFontWeight: 600,
                    },
                    Table: {
                        headerBg: '#fff',
                        headerColor: '#8c8c8c',
                    }
                }
            }}
        >
            <CustomDashboard />
        </ConfigProvider>
    );
};

export default App;
