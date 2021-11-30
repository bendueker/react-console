var g_oAxiomGroupChats = {};

function LoadGroupChat() {
  LoadScripts(aFiles, InitGroupChat);
}

var aFiles = [
  {
    type: "css",
    url: "https://qa.onlinexperiences.com/cfr/stylesheets/Axiom/GroupChat.css",
  },
/*   {
    type: "css",
    url: "https://qa.onlinexperiences.com/cfr/stylesheets/AxiomUI.css",
  }, */
  {
    type: "css",
    url: "https://qa.onlinexperiences.com/cfr/stylesheets/AxiomSharedView.css",
  },
  {
    type: "js",
    url: "https://qa.onlinexperiences.com/cfr/scripts/jscolor.js",
  },
  {
    type: "js",
    url: "https://qa.onlinexperiences.com/cfr/scripts/LanguageStrings1033.js",
  },
  {
    type: "js",
    url: "https://qa.onlinexperiences.com/cfr/scripts/VTS/GroupChatShared.js",
  },
  {
    type: "js",
    url: "https://qa.onlinexperiences.com/cfr/scripts/VTS/Axiom/GroupChat.js",
  },
  {
    type: "css",
    url: "https://qa.onlinexperiences.com/cfr/scripts/VXP/Reflow/WebcastLobby/css/Chat.css",
  },
];

function InitGroupChat() {
  var oLightningDetails = {
    LASFileName: "https://qa.onlinexperiences.com/scripts/Server.nxp",
    InstanceID: 1,
    ScriptDir: "https://qa.onlinexperiences.com/cfr/scripts",
  };

  var fnCreateMessageRow = function (oData) {
    var oContainer = document.createElement("div");
    oContainer.className = "AxiomGroupChatLine AxiomFlex";

    oContainer.setAttribute("data-self", oData.bSelf ? 1 : 0);

    if (oData.bDisplayUserImages) {
      var oUserImageArea = CreateChatMessageUserImageArea(oData);
      oContainer.appendChild(oUserImageArea);
    }

    var oBubble = NoClickCreateTextBubble(oData);
    oContainer.appendChild(oBubble);

    return oContainer;
  };

  function NoClickCreateTextBubble(oLine) {
    var oBubble = document.createElement("div");
    oBubble.className = "AxiomGroupChatBubble";

    if (oLine.bModerator && oLine.DetailsKey) {
      var oElem = CreateUserListDeleteMessageArea(oLine);
      oBubble.appendChild(oElem);
    }

    var oHolder = document.createElement("div");
    oHolder.className = "";

    oBubble.appendChild(oHolder);

    var cLine = "";
    if (oLine.UserName) {
      var oName = document.createElement("div");
      oName.className = "AxiomGroupChatLineTextName";
      oName.appendChild(document.createTextNode(oLine.UserName + ":"));
      oHolder.appendChild(oName);
      if (oLine.ChatUserKey && !oLine.bSelf) {
        oName.setAttribute("data-self", 0);
        //oName.setAttribute("onclick", "DisplayUserProfileChat(" + oLine.ChatUserKey + ")");
      }
      if (
        oLine.AllowBan &&
        !IsChatModerator(oLine.ChatUserKey) &&
        oLine.bModerator
      ) {
        //bModerator denotes the recipient is a moderator, IsChatModerator checks if the sender was a moderator
        //attach ban right click
        oName.addEventListener("contextmenu", function (evt) {
          if (evt.preventDefault)
            //stop normal behavior
            evt.preventDefault();

          ShowUserContext(oName, oLine);

          return false; //cancel the event
        });
      }
    }

    var oMessage = document.createElement("div");
    oMessage.innerHTML = oLine.FrontTag + oLine.PostText + oLine.EndTag;
    oMessage.className = "AxiomGroupChatLineMessage";
    if (IsIE() || IsEdge()) oMessage.className += " AxiomGroupChatContentSizer";

    oHolder.appendChild(oMessage);

    if (oLine.bNeedsTranslation) {
      oMessage.id = "Source" + oLine.DetailsKey;

      var oTranslation = document.createElement("div");
      oTranslation.id = "Translation" + oLine.DetailsKey;
      oTranslation.className = "AxiomGroupChatLineMessageTranslation";
      oHolder.appendChild(oTranslation);

      Translator.QueueTranslate(
        oLine.LocaleID,
        oLine.PostText,
        oLine.DetailsKey
      );
    }

    if (oLine.PostDate) {
      var dDate = new Date(oLine.PostDate);

      var cFormatDate = "";
      var cPart;
      var cDelimiter = oLine.DateFmtMask.substr(1, 1);
      for (var iLup = 0; iLup < 5; iLup += 2) {
        switch (oLine.DateFmtMask.substr(iLup, 1)) {
          case "M":
            cPart = "0" + (dDate.getMonth() + 1);
            cPart = cPart.substr(cPart.length - 2, 2);
            break;
          case "D":
            cPart = "0" + dDate.getDate();
            cPart = cPart.substr(cPart.length - 2, 2);
            break;
          case "Y":
            cPart = "" + dDate.getFullYear();
            break;
        }

        cFormatDate += cPart;
        if (iLup < 4) cFormatDate += cDelimiter;
      }

      var oTimeStamp = document.createElement("span");
      oTimeStamp.className = "AxiomGroupChatLineTimeStamp";
      oTimeStamp.appendChild(
        document.createTextNode(cFormatDate + " " + dDate.toLocaleTimeString())
      );
      oHolder.appendChild(oTimeStamp);
    }
    return oBubble;
  }

  var oAxiomGroupChat;
  var oConfig = {
    CreateMessageRow: fnCreateMessageRow,
    //CreateUserRow: CreateUserRow,
    Polling: false,
    ResizeRequest: null,
    //TranslatorCallback: TranslatorCallback,
    HideFontSetings: false,
    HideReadingMode: false,
    //ExternalChatRoomLoaded: onAxiomGroupChatRoomLoaded,
  };
  var g_oMessages = g_oLang;
  var g_oDataCache = new DataCache();

  oAxiomGroupChat = new AxiomGroupChatRoom(
    oConfig,
    oLightningDetails,
    g_oMessages,
    g_oDataCache
  );
  var oContainer = document.getElementById("ChatIframeContainer");
  oContainer.appendChild(oAxiomGroupChat.element);
  oAxiomGroupChat.Start(524923, null, null, false);
  g_oAxiomGroupChats[524923] = oAxiomGroupChat;
  
}

function LoadScripts(array, onComplete) {
  function getFileName(path) {
    var URL = path;
    if (path.indexOf("?") != -1) URL = path.substring(0, path.indexOf("?"));
    return (
      URL.match(/([-_\w]+[.][\w]+$|[-_\w]+$)/i)[0] +
      (path.indexOf("?") != -1
        ? path.substring(path.indexOf("?") - 1, path.length)
        : "")
    );
  }

  var head = document.getElementsByTagName("head")[0];
  var aCurrent = [],
    oHeadElem;
  for (var i = 0, ii = head.childNodes.length; i < ii; i++) {
    oHeadElem = head.childNodes[i];
    if (oHeadElem.nodeName.toUpperCase() == "LINK")
      if (oHeadElem.href) aCurrent.push(getFileName(oHeadElem.href));
    if (oHeadElem.nodeName.toUpperCase() == "SCRIPT")
      if (oHeadElem.src) aCurrent.push(getFileName(oHeadElem.src));
  }

  var loader = function (url, type, handler) {
    var fileref = null;
    var cFile = getFileName(url);
    if (aCurrent.indexOf(cFile) == -1) {
      switch (type) {
        case "js":
          fileref = document.createElement("script");
          fileref.setAttribute("type", "text/javascript");
          fileref.setAttribute("src", url);
          fileref.onload = fileref.onreadystatechange = function () {
            if (
              !this.readyState ||
              this.readyState == "loaded" ||
              this.readyState == "complete"
            ) {
              fileref.onreadystatechange = fileref.onload = null;
              handler();
            }
          };
          var head = document.getElementsByTagName("head")[0];
          (head || document.body).appendChild(fileref);

          break;
        case "css":
          var fileref = document.createElement("link");
          fileref.setAttribute("rel", "stylesheet");
          fileref.setAttribute("type", "text/css");
          fileref.setAttribute("href", url);
          var head = document.getElementsByTagName("head")[0];
          (head || document.body).appendChild(fileref);

          // var oIMG = new Image();
          // AddEventHandler(oIMG,"error",handler);
          // oIMG.src = url;
          handler();
          break;
      }
    } else {
      handler();
    }
  };
  (function () {
    if (array.length != 0) {
      var aArray = array.shift();
      loader(aArray.url, aArray.type, arguments.callee);
    } else {
      if (onComplete) onComplete();
    }
  })();
}
