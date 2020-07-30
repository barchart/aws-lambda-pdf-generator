# Paths

## POST /print 

> Prints PDF page from html layout.

**Summary**: Prints PDF page from html layout.

#### Request Body
    
**Content Type**: application/json

**Type**: <code>Object</code>

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| source | <code>String</code> | false | false | Optional string to define the source of request |
| html | <code>String</code> | false | false | HTML layout to print |
| pdfSettings | <code>Object</code> | false | false | Optional settings passed to page.pdf() call |

**Example**:

```json
{
  "source": "crude-oil-price-report",
  "html": "<html><head></head><body>test</body></html>",
  "pdfSettings": {
    "width": "100px"
  }
}
```

#### Responses

**Status Code**: 200

> Generated PDF file.

**Content Type**: <code>application/pdf</code>

**Response Type:** <code>String</code>

* * *

**Status Code**: 400 - [BadRequest](/content/api/components?id&#x3D;responsesbadrequest)

* * *

**Status Code**: 500 - [ServerError](/content/api/components?id&#x3D;responsesservererror)

* * *

## $REF /print/chrome/v81 

> 

* * *

## $REF /print/chrome/v83 

> 

* * *

