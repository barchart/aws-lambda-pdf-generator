# Paths

## POST /print 

> Prints PDF page from html layout (chrome v88 by default).

**Summary**: Prints PDF page from html layout (chrome v88 by default).

#### Request Body
    
**Content Type**: application/json

**Type**: <code>Object</code>

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| source | <code>String</code> | false | false | Optional string to define the source of request |
| html | <code>String</code> | true | false | HTML layout to print |
| settings | <code>Object</code> | false | false | Optional [settings](https://github.com/puppeteer/puppeteer/blob/v5.2.1/docs/api.md#pagepdfoptions) passed to page.pdf() |

**Example**:

```json
{
  "source": "crude-oil-price-report",
  "html": "<html><head></head><body>test</body></html>",
  "settings": {
    "width": "100px"
  }
}
```

#### Responses

**Status Code**: 200 - [Success](/content/api/components?id=responsessuccess)

* * *

**Status Code**: 400 - [BadRequest](/content/api/components?id=responsesbadrequest)

* * *

**Status Code**: 500 - [ServerError](/content/api/components?id=responsesservererror)

* * *

