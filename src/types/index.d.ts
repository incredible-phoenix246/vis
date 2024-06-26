type NavbarLinkProps = {
  id?: number;
  link: string;
  label: string;
};

type SidebarProps = {
  id?: number;
  label: string;
  icon: Icon;
  link: string;
};

interface User {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  createdAt?: Date;
  updatedAt: Date;
  referralCode?: string;
  referredById?: string;
  image?: string;
  referredBy?: User;
  referrals: User[];
  referralsMade: Referral[];
  verified: boolean;
  accountType: "user" | "admin" | "operator";
  mobilityType: string;
  driversLicense: string;
  vechLicense: string;
  isOperatorverified: boolean;
  sentMessages: Message[];
  receivedMessages: Message[];
  conversationsAsSender: Conversation[];
  conversationsAsReceiver: Conversation[];
  orders: Order[];
  bids: Bid[];
  deliveries: Order[];
}

interface Referral {
  id: number;
  code: string;
  userId: string;
  user: User;
}

interface Conversation {
  id: string;
  senderId: string;
  receiverId: string;
  messages: Message[];
  sender: User;
  receiver: User;
}

interface Message {
  id: number;
  content: string;
  createdAt: Date;
  senderId: string;
  receiverId: string;
  conversationId: string;
  conversation: Conversation;
  sender: User;
  receiver: User;
}

interface Order {
  id: string;
  pickupname: string;
  pickupaddress: string;
  pickupphone: string;
  pickupitem: string[];
  weight?: string;
  deliverymode: string;
  note?: string;
  dropoffname: string;
  dropoffaddress: string;
  dropoffphone: string;
  deliverytype: string;
  insurance: boolean;
  dispatched: boolean;
  deliveries: Order[];
  owner: User;
  userId: string;
  deliveryAgent?: User;
  deliveryAgentId?: string;
  bids: Bid[];
  status: "pending" | "in-tranist" | "canceled" | "delivered";
  createdAt?: Date;
  updatedAt: Date;
}

interface Bid {
  id: number;
  bidder: User;
  userId: string;
  accepted?: boolean;
  price: string;
  orderId: string
  deliveryhour: string;
  status: "pending" | "accepted" | "rejected"
}

interface Notification {
  id: number;
  from: string;
  avatar: string;
  type: string;
  item: {
    type: string;
    body: string;
  };
  read?: boolean;
  userId: string;
  createdAt: string;
}

type SettingsProps = {
  id?: number;
  name: string;
  path: string;
};

type CloudinaryAsset = {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  original_filename: string;
};

export {
  NavbarLinkProps,
  User,
  SidebarProps,
  Order,
  Notification,
  Bid,
  SettingsProps,
  CloudinaryAsset
};

// xapajij412@lisoren.com
