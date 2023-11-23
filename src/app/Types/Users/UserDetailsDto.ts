export interface UserDetailsDTO {
    userName: string;
    phone: string;
    email: string;
    location: string;
    bookmarks: UserChildBookmarkDTO[];
    notifications: UserChildNotificationDTO[];
    ratings: UserChildRatingDTO[];
    userRequests: UserChildRequestDTO[];
    providerRequests: ProviderChildRequestDTO[];
    services: UserChildServicesDTO[];
}

export interface UserChildBookmarkDTO {
    serviceId: number;
    serviceName: string;
}

export interface UserChildNotificationDTO {
    id: number;
    text: string;
    date: Date;
    seen: boolean;
}

export interface UserChildRatingDTO {
    serviceId: number;
    serviceName: string;
    comment: string;
    rating: number;
    date: Date;
}

export interface UserChildRequestDTO {
    id: number;
    serviceId: number | null;
    serviceName: string | null;
    requestText: string;
    date: Date;
    status: string;
}

export interface UserChildServicesDTO {
    id: number;
    name: string;
    price: number;
    location: string;
    rating: number;
    description: string;
    approved: boolean;
}

export interface ProviderChildRequestDTO {
    id: number;
    serviceId: number | null;
    serviceName: string | null;
    requestText: string;
    requesterName: string;
    date: Date;
    status: string;
}