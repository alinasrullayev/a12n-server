/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This is the request body used by the HTML form submission for creating new apps
 */
export interface AppNewFormBody {
  nickname: string;
  url: string;
  clientId?: string;
  allowedGrantTypes?: string;
  redirectUris?: string;
  requirePkce?: string;
}
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This schema represents an App. An App is a headless user that can may have privileges and credentials applied.
 */
export interface App {
  /**
   * HAL Links
   */
  _links?: {
    [k: string]: unknown;
  };
  /**
   * Human-readable displayname.
   */
  nickname: string;
  /**
   * Setting this to false will disable the app.
   */
  active: boolean;
  /**
   * Creation date and time.
   */
  createdAt: string;
  /**
   * Last time the app was modified.
   */
  modifiedAt: string;
  /**
   * Ether 'user', 'app' or 'group'
   */
  type: "app";
  privileges: {
    [k: string]: string[];
  };
}
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This is the request body used by the HTML form submission for creating new groups
 */
export interface GroupNewFormBody {
  nickname: string;
}
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The body of a PATCH call on a group. This PATCH request lets you add or remove members from a group
 */
export interface GroupPatch {
  operation: "add-member" | "remove-member";
  /**
   * A URI pointing to a user. This can be specified as a mailto: address, a relative URI pointing to the user resource or an absolute URI
   */
  memberHref: string;
}
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A group can contain apps, users and other gruops and lets you assign privileges to all its members.
 */
export interface Group {
  /**
   * HAL Links
   */
  _links?: {
    [k: string]: unknown;
  };
  /**
   * Human-readable displayname.
   */
  nickname: string;
  /**
   * Creation date and time.
   */
  createdAt: string;
  /**
   * Last time the group was modified.
   */
  modifiedAt: string;
  /**
   * Ether 'user', 'app' or 'group'
   */
  type: "group";
  privileges: {
    [k: string]: string[];
  };
}
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This is the request body used for editing principals.
 */
export interface PrincipalEdit {
  _links?: unknown;
  nickname: string;
  active: boolean;
  type: "user" | "app" | "group";
  createdAt?: {
    [k: string]: unknown;
  };
  modifiedAt?: {
    [k: string]: unknown;
  };
  privileges?: {
    [k: string]: unknown;
  };
}
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This is the request body used to create new principals
 */
export interface PrincipalNew {
  _links?: unknown;
  nickname: string;
  /**
   * Deprecated: If set, and when an identity href is passed when creating a user, this automatically sets that identity as 'verified'. This flag exists to replicate the behavior of older a12n-server versions when email verification was handled through the 'active' flag. This will be fully ignored in a future version and eventually removed.
   */
  active?: boolean;
  type: "user" | "app" | "group";
}
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This object is a request body for patching a principal's ACL.
 */
export interface PrincipalPatchPrivilege {
  /**
   * Indicates that a privilege was added
   */
  action: "add";
  /**
   * The name of the privilege, for example 'write' or 'read'
   */
  privilege: string;
  /**
   * The resource on which the user is receiving the privilege for. This should be a URI or '*'
   */
  resource: "*" | string;
}
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This object contains the list of permissions/scopes that the user has granted to an app. The app may act on behalf of the user for these scopes.
 */
export interface UserAppPermissions {
  /**
   * HAL Links
   */
  _links?: {
    [k: string]: unknown;
  };
  /**
   * List of scopes that were granted to the app
   */
  scope: string[];
  /**
   * The date/time when the user first granted privileges to the app.
   */
  createdAt: string;
  /**
   * The date/time when the list of scopes was last updated.
   */
  modifiedAt: string;
  /**
   * The last time an access token was generated or refreshed by this app, for this user.
   */
  lastUsedAt: string | null;
}
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This is the request body used by the HTML form submission for creating new users
 */
export interface UserNewFormBody {
  nickname: string;
  email: string | "";
  /**
   * Automatically mark email address as validated. Shoudl be Javacript thruthy string.
   */
  markEmailValid: string;
}
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A user
 */
export interface User {
  /**
   * HAL Links
   */
  _links?: {
    [k: string]: unknown;
  };
  /**
   * Human-readable displayname for the user.
   */
  nickname: string;
  /**
   * If false, the user will not be able to log in.
   */
  active: boolean;
  /**
   * Creation date and time.
   */
  createdAt: string;
  /**
   * Last time the user was modified.
   */
  modifiedAt: string;
  /**
   * May be 'user', 'app' or 'group'
   */
  type: "user";
  privileges: {
    [k: string]: string[];
  };
  /**
   * Does the user have a password set?
   */
  hasPassword: boolean;
}
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Request body of the exchange one-time-token endpoint.
 */
export interface VerificationTokenExchangeRequest {
  /**
   * The token previously obtained with the 'generate one-time-token' endpoint.
   */
  token: string;
  /**
   * The OAuth2 client_id. This client will be associated with the generated token.
   */
  client_id: string;
  /**
   * Activate the user if the token was valid.
   */
  activateUser?: boolean;
  /**
   * Don't expire the one-time-token even if it was correct.
   */
  dontExpire?: boolean;
}
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The request made to the one-time-token generate endpoint.
 */
export interface VerificationTokenGenerateRequest {
  /**
   * Specify how long the token is valid for, in seconds.
   */
  expiresIn?: number;
  /**
   * If set, the token will be associated with a specific email address or phone number. When this token is validated later, the email address or phone number will be marked as 'verified' for the user.
   */
  identity?: string;
}
