/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-08 11:29:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 12:43:88
*/

import {blobFromDataURL} from 'blob'

const dataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAyADIDASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAIEBgUDAf/EACwQAAEEAQMCBQMFAQAAAAAAAAEAAgMRBAUSISIxBhNBUWEUMnEjkaGxstH/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAIREAAgIBAwUBAAAAAAAAAAAAAAECERIEFCExM0FxodH/2gAMAwEAAhEDEQA/ANkiKtm5gxI203fK87Y2XVnv+w7lXNpK2ebLKhHMyUuDHbtpokdr9lksjPzM187pMowYEBIfKw7TIR3ArsL4vuquJNlYenYub9TPE2U1I272lx4cGngjtYPp8rPuoWLI3SLlaTqr8pz8XLa2PNiHW1vZw9CPhdVXxkpK0MIiKQBZzXcgxZGVJz+hh20D3cTf+QtE40LDS4+gaLJXE13FfFqNSxyRvkg8qTpI2HktPNe7gVRqe2x4tqzh5OP5PhAxMaDULXHn1sElWtQo+HJdvb6cEbvwP5VbLex3hzJxnSmSXHjDJKFciq49vlT1SYjw8xrTuknYyNu1v3E1dD8WuZza9kPwSymAaRnMNzF7GFx4LmubyCtoOyxpx/q9UwtMi3mPGAllcfgU3n3WyW/SJ4EkERFrA+EWORahkxszJnS5QEz3MEZMguwBX9eq9FFzA4EEWCk0n1HbqjN5GmQyajKxkhDiwxuO8dba+1xruOVX1DCZp2JFPNlDysZrY4uN5DjxurgE178LRnToDN5vXd9r4UpNPxZQBLE14BsB3ItZ9tF3Y4OKmnNWvPNfTx0zAxsKHdj9Zl63yu5dIT6n/ivqLWNY3a0ABSWhJJUiIRETAIiIAIiIAIiIAIiIA//Z'

describe('blob', () => {
  it('blobFromDataURL', () => {
    if (window.Blob) {
      const blob = blobFromDataURL(dataURL)
      expect(blob).toEqual(jasmine.any(Blob))
    }
  })
})
