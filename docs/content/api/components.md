# Components

## Responses

### Success :id=responsessuccess
> Generated PDF file.


* * *

### BadRequest :id=responsesbadrequest
> Bad request.

**Content Type**: <code>application/json</code>

**Response Type:** <code><code>Array&lt;Object&gt;</code></code>

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| value | <code>Object</code> | false | false |  |
| value.code | <code>String</code> | false | false |  |
| value.message | <code>String</code> | false | false |  |
| children | <code>Array</code> | false | false |  |

**Example**:

```json
[
  {
    "value": {
      "code": "PRINT_FAILED_NO_HTML_LAYOUT",
      "message": "Failed to print PDF, missing html layout."
    },
    "children": []
  }
]
```

* * *

### ServerError :id=responsesservererror
> Server error.

**Content Type**: <code>application/json</code>

**Response Type:** <code><code>Array&lt;Object&gt;</code></code>

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| value | <code>Object</code> | false | false |  |
| value.code | <code>String</code> | false | false |  |
| value.message | <code>String</code> | false | false |  |
| children | <code>Array</code> | false | false |  |

**Example**:

```json
[
  {
    "value": {
      "code": "REQUEST_GENERAL_FAILURE",
      "message": "An attempt to print html page failed for unspecified reason(s)."
    },
    "children": []
  }
]
```

* * *


