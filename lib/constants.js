import keyMirror from 'key-mirror-nested'

export const ActionTypes = keyMirror({
  DOC: {
    ROUTE: {
      SET: null
    },
    FETCH: {
      REQUEST: null,
      SUCCESS: null
    },
    SAVE: {
      REQUEST: null,
      SUCCESS: null
    },
    AUTOSAVE: {
      START: null,
    },
    CONTENT: {
      CHANGED: null,
    },
    TITLE: {
      SET: null
    },
    PARAM: {
      SET: null
    },
    STATUS: {
      SET: null
    },
    FILE: {
      UPLOAD: {
        REQUEST: null,
        SUCCESS: null,
        FAILURE: null
      },
    },
    FILES: {
      SET: null
    }
  },
  USER: {
    FETCH: {
      REQUEST: null,
      SUCCESS: null,
    },
    LOGIN: {
      PROMPT: null,
      REQUEST: null,
      SUCCESS: null,
      FAILURE: null,
      RESTORE: null
    },
    LOGOUT: {
      REQUEST: null,
      SUCCESS: null
    },
  },
  DIALOG: {
    SHOW: null,
    DISMISS: null
  },
  PREVIEW: {
    RENDER: {
      REQUEST: null,
      SUCCESS: null,
      FAILURE: null,
    },
    AUTO: {
      TOGGLE: null,
    },
    CAMERA: {
      RESET: null
    },
    TIMEOUTID: {
      SET: null
    },
    MODE: {
      SET: null
    },
    FILTER: {
      SELECTOR: {
        SET: null
      },
      LOGIC: {
        SET: null
      }
    }
  },
  EDITOR: {
    OPEN: null,
    CLOSE: null,
    FOCUS: null,
    BLUR: null,
    CURSOR: {
      MOVE: null,
    },
    CONTENT:{
      SET: null
    },
    AUTOSAVE: {
      START: null
    },
    PARAM: {
      SET: null
    }
  },
  GALLERY: {
    RESET: null,
    QUERY: null,
    PATHNAME: {
      SET: null
    },
    SCROLL_TOP: {
      SET: null
    },
    FIRST_PAGE: {
      REQUEST: null,
      SUCCESS: null,
    },
    MORE: {
      REQUEST: null,
      SUCCESS: null,
      FAILURE: null,
    },
    TERMS: {
      SET: null,
    },
    FILTER: {
      SET: null,
    },
    USERID: {
      SET: null,
      CLEAR: null,
    },
    COLLECTION_ID: {
      SET: null
    }
  },
  DOWNLOAD: {
    STL: {
      REQUEST: null,
      SUCCESS: null,
      FAILURE: null,
    }
  },
  PROGRESS: {
    SET: null,
    CLEAR: null,
  },
  FIREBASE: {
    DOC: {
      FETCH: null,
      UPDATE: null,
      STATUS: {
        SET: null
      }
    },
    USER: {
      IMAGE_URL: {
        FETCH: null
      }
    },
    BULK: {
      FETCH: {
        SUCCESS: null
      },
    },
    FETCH: {
      SUCCESS: null
    },
    SET: {
      SUCCESS: null
    },
    CACHE: {
      CLEAR: null,
      SET: null
    }
  }
})
