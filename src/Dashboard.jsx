
import React, { useState, useEffect } from 'react';
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
    GlobalOutlined,
    SunOutlined,
    MoonOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

// Mock Data - UAE HRMS Context
const statsData = [
    { title: 'Total Employees', value: 421, trend: 5, icon: <UsergroupAddOutlined /> },
    { title: 'Visa Processing', value: 12, trend: 2, icon: <SafetyCertificateOutlined /> },
    { title: 'Active Vacancies', value: 24, trend: 0, icon: <SolutionOutlined /> },
    { title: 'Leave Requests', value: 8, trend: 12, icon: <FileProtectOutlined /> },
];

const tasksData = [
    { title: 'Renew Trade License', assignee: 'Mohammed Al Farsi', status: 'Overdue', date: 'Sun, 16 Feb', assigneeAvatar: 'M' },
    { title: 'Process WPS for Feb', assignee: 'Sarah Johnson', status: 'Todo', date: 'Thu, 27 Feb', assigneeAvatar: 'S' },
    { title: 'Visa Medical for Ali', assignee: 'Rashed Khan', status: 'Doing', date: 'Mon, 17 Feb', assigneeAvatar: 'R' },
    { title: 'Submit VAT Return', assignee: 'Fatima Al Sayed', status: 'Doing', date: 'Wed, 19 Feb', assigneeAvatar: 'F' },
    { title: 'EID Fingerprint Appt', assignee: 'John Doe', status: 'Doing', date: 'Tue, 18 Feb', assigneeAvatar: 'J' },
];

const interviewsData = [
    { day: '17', time: '09:00AM - 10:00AM', name: 'Khalid Al Mansoori', timezone: 'GMT+4' },
    { day: '17', time: '11:00AM - 12:00PM', name: 'Priya Kapoor', timezone: 'GMT+4' },
    { day: '17', time: '02:00PM - 03:00PM', name: 'Omar Al Balooshi', timezone: 'GMT+4', active: true },
    { day: '18', time: '10:00AM - 11:00AM', name: 'James Wilson', timezone: 'GMT+4' },
    { day: '19', time: '12:30PM - 01:30PM', name: 'Aisha Hassan', timezone: 'GMT+4' },
];

const complianceData = [
    { name: 'Visa Renewal (Ahmed)', progress: 75 },
    { name: 'Labor Card (Maria)', progress: 40 },
    { name: 'Health Ins. (Team A)', progress: 90 },
    { name: 'EID Update (Sales)', progress: 20 },
    { name: 'Tawteen Quota', progress: 60 },
];

const applicantsData = [
    { name: 'Layla Mahmoud', role: 'HR Manager', avatar: 'L' },
    { name: 'Bilal Saeed', role: 'Public Relations Officer (PRO)', avatar: 'B' },
    { name: 'Kieran Smith', role: 'Senior Developer', avatar: 'K' },
    { name: 'Fatima Al Qasimi', role: 'Marketing Specialist', avatar: 'F' },
    { name: 'Rajesh Kumar', role: 'General Accountant', avatar: 'R' },
];

// Components
const StatCard = ({ title, value, trend, icon, isDarkMode }) => {
    return (
        <Card bordered={true} style={{ height: '100%', borderRadius: 12, borderColor: isDarkMode ? '#303030' : '#d9d9d9' }}>
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
                            backgroundColor: i === 5 ? '#696cff' : (isDarkMode ? '#303030' : '#f0f0f0'),
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

const CustomDashboard = ({ isDarkMode, toggleTheme }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [collapsed, setCollapsed] = useState(false);

    // Update body background on theme change
    useEffect(() => {
        document.body.style.backgroundColor = isDarkMode ? '#141414' : '#f0f2f5';
    }, [isDarkMode]);

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
        <Layout style={{ minHeight: '100vh', background: 'transparent' }}>
            <Sider
                width={260}
                theme="light"
                breakpoint="lg"
                collapsedWidth="0"
                style={{
                    borderRight: isDarkMode ? '1px solid #303030' : '1px solid #f0f0f0',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    zIndex: 100
                }}
            >
                <div style={{ height: 64, margin: 16, display: 'flex', alignItems: 'center', gap: 8, fontSize: 18, fontWeight: 'bold' }}>
                    <SafetyCertificateOutlined style={{ fontSize: 24, color: '#696cff' }} />
                    <Text strong>HRAIN</Text>
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
            <Layout style={{ marginLeft: 260, padding: '0 24px 24px', background: 'transparent' }}>
                <Header style={{
                    background: colorBgContainer,
                    padding: '0 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    top: 0,
                    zIndex: 99,
                    borderBottom: isDarkMode ? '1px solid #303030' : '1px solid #f0f0f0'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <Text strong style={{ fontSize: 16 }}>Home</Text>
                    </div>

                    <Input
                        prefix={<SearchOutlined style={{ color: '#ccc' }} />}
                        placeholder="Search..."
                        style={{ width: 400, borderRadius: 8, background: isDarkMode ? '#1f1f1f' : '#f5f5f5', border: 'none' }}
                    />

                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <Button
                            icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
                            onClick={toggleTheme}
                        />
                        <Button type="primary" style={{ background: '#696cff', borderRadius: 8 }} icon={<RiseOutlined />}>Upgrade</Button>
                        <Badge count={2} size="small">
                            <Button shape="circle" icon={<BellOutlined />} />
                        </Badge>
                        <Avatar style={{ backgroundColor: '#87d068' }}>V</Avatar>
                    </div>
                </Header>

                <Content style={{ margin: '24px 0 0', minHeight: 280 }}>
                    <Title level={3} style={{ fontWeight: 'normal', margin: '0 0 24px' }}>
                        Hello <span style={{ fontWeight: 'bold' }}>HRAIN</span>, Welcome Back
                    </Title>

                    {/* Stats Row */}
                    <Row gutter={[24, 24]}>
                        {statsData.map((stat, index) => (
                            <Col xs={24} sm={12} lg={6} key={index}>
                                <StatCard {...stat} isDarkMode={isDarkMode} />
                            </Col>
                        ))}
                    </Row>

                    <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
                        {/* Upcoming Tasks */}
                        <Col xs={24} lg={16}>
                            <Card
                                title={<span><CheckSquareOutlined /> Upcoming Task</span>}
                                extra={<a href="#" style={{ color: '#1677ff', fontWeight: 500 }}>View more &gt;</a>}
                                bordered={true}
                                style={{ borderRadius: 12, height: '100%', borderColor: isDarkMode ? '#303030' : '#d9d9d9' }}
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
                                bordered={true}
                                style={{ borderRadius: 12, height: '100%', borderColor: isDarkMode ? '#303030' : '#d9d9d9' }}
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
                                                    borderRadius: 8, background: isDarkMode ? '#1f1f1f' : '#f5f5f5',
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
                                                    border: `1px solid ${interview.active ? '#1677ff' : (isDarkMode ? '#303030' : '#f0f0f0')}`,
                                                    borderRadius: 12,
                                                    padding: '12px 16px',
                                                    background: interview.active ? (isDarkMode ? '#111b26' : '#e6f7ff') : (isDarkMode ? '#141414' : '#fff'),
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
                                bordered={true}
                                style={{ borderRadius: 12, borderColor: isDarkMode ? '#303030' : '#d9d9d9' }}
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
                                bordered={true}
                                style={{ borderRadius: 12, borderColor: isDarkMode ? '#303030' : '#d9d9d9' }}
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
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <ConfigProvider
            theme={{
                algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
                token: {
                    colorPrimary: '#696cff',
                    borderRadius: 8,
                    fontFamily: '"Open Sans", sans-serif',
                },
                components: {
                    Card: {
                        headerFontSize: 16,
                        headerFontWeight: 600,
                    },
                    Table: {
                        headerBg: isDarkMode ? '#1f1f1f' : '#fff',
                        headerColor: '#8c8c8c',
                    }
                }
            }}
        >
            <CustomDashboard isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />
        </ConfigProvider>
    );
};

export default App;
