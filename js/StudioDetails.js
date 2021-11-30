"use strict";
const { Tabs, Drawer } = antd;
const { useState, useEffect } = React;
const { EyeOutlined, UserOutlined,FilePdfOutlined } = icons;
const { TabPane } = Tabs;
/* 
AttachmentMaxSize: "::{AttachmentMaxSize}"
AttendanceVerification: 0
AttendeeTypeKey: 5587
AudioOnly: 0
AudioOnlyMessage: "Audio only mode enabled due to low bandwidth. You can attempt to connect to video again using the gear icon located in the bottom right corner of the video panel."
AutoEnd: 0
AutoStart: 0
AxiomProductLevel: 0
Bio: ""
CMSInstanceID: "::{CMSInstanceID}"
CSSDir: "::{CSSDir}"
CompanyKey: 522
CompanyName: "asdf"
ConnectionModuloByMinute: 5
ConsoleLogo: ""
ContentServerAddress: "::{ContentServerAddress}"
DashLiveDelaySeconds: 2
DashSeekSizeSeconds: 2
DefaultSceneBackground: ""
DefaultVideoSource: ""
DisableCustomSpeakerRoles: 0
DisableForwardSeek: 0
DisableShareWidget: 0
DisableSlideNotesDisplay: 0
EMailAddress: "TEST33432@WESTDEV.COM"
EmoticonImage: ""
EndSlideURL: ""
EstimatedDuration: 75
EventAbstract: "<p>Reimagine webinars with our newest product - The Lobby Experience! A webinar is no longer just a presentation. Lobby Experience enables marketers to turn one-time webinars into unique, value-driven experiences. Increase attendee engagement with fully-branded pre and post-webcast Lobbies.</p>\n\n<p>Upon your registration, you'll be taken directly to the Lobby for this webinar where you can download content, submit questions, watch a preview video, and more!  Keep your audience informed and drive excitement with interactive content!</p>\n\n<p>Reimagine webinars with our newest product - The Lobby Experience! A webinar is no longer just a presentation. Lobby Experience enables marketers to turn one-time webinars into unique, value-driven experiences. Increase attendee engagement with fully-branded pre and post-webcast Lobbies.</p>\n\n<p>Upon your registration, you'll be taken directly to the Lobby for this webinar where you can download content, submit questions, watch a preview video, and more!  Keep your audience informed and drive excitement with interactive content!</p>\n\n\n<p>Reimagine webinars with our newest product - The Lobby Experience! A webinar is no longer just a presentation. Lobby Experience enables marketers to turn one-time webinars into unique, value-driven experiences. Increase attendee engagement with fully-branded pre and post-webcast Lobbies.</p>\n\n<p>Upon your registration, you'll be taken directly to the Lobby for this webinar where you can download content, submit questions, watch a preview video, and more!  Keep your audience informed and drive excitement with interactive content!</p>\n\n<p>Reimagine webinars with our newest product - The Lobby Experience! A webinar is no longer just a presentation. Lobby Experience enables marketers to turn one-time webinars into unique, value-driven experiences. Increase attendee engagement with fully-branded pre and post-webcast Lobbies.</p>\n\n<p>Upon your registration, you'll be taken directly to the Lobby for this webinar where you can download content, submit questions, watch a preview video, and more!  Keep your audience informed and drive excitement with interactive content!</p>\n\n\n<p>Reimagine webinars with our newest product - The Lobby Experience! A webinar is no longer just a presentation. Lobby Experience enables marketers to turn one-time webinars into unique, value-driven experiences. Increase attendee engagement with fully-branded pre and post-webcast Lobbies.</p>\n\n<p>Upon your registration, you'll be taken directly to the Lobby for this webinar where you can download content, submit questions, watch a preview video, and more!  Keep your audience informed and drive excitement with interactive content!</p>\n\n\n"
EventAttendeeKey: "::{EventAttendeeKey}"
EventDescription: "Lobby Experience - JACKED UP "
EventGUID: "6D095D41-67A3-416A-A635-72899A3BC061"
EventKey: 119158
EventStaffKey: null
ExhibitorUserTypeKey: null
ExitAction: 1
ExitData: "70333"
ExitTarget: "_self"
ExternalID: ""
FrameHeight: 360
FrameRate: 30
FrameRateKey: 0
FrameSizeKey: 4
FrameWidth: 640
FurthestTime: 28142
GMTOffset: -5
HandoutURL: "::{LASFileName}?LASCmd=AI:::{InstanceID};F:LBSATTACH!V&AttachmentKey="
ImageDir: "::{ImageDir}"
InitialSlideURL: "Server.nxp?LASCmd=AI:1;F:QP!14050&EventKey=119158&SlideContentKey=521734"
InputBufferSize: "::{InputBufferSize}"
InputLangLocaleID: null
InstanceID: "::{InstanceID}"
IsInterprefyUsed: 0
IsOnDemand: 1
IsSimulive: 0
LASFileName: "::{LASFileName}"
LangLocaleID: 1033
LibraryDir: "::{LibraryFileUploadPath}"
LiveCDNPath: "studioqa-synlive.akamaized.net"
LoadingLogo: "/cfr/Images/VTS/Axiom/Console/PresenterTool/StudioPresenterConsoleLogo.svg"
MaxMediaVersions: 2
MaxVideoUploadSize: "::{MaxVideoUploadSize}"
MediaDir: "\\\\dc1-fs02.inxpo.dmz\\QA"
MediaLiveEnabled: 0
MediaViewSaveInternal: 60
MinimumConnectionRetry: 3
ModeratorRights: null
Name: "Kirk hkk"
OffsetStart: 750
OnDemandCDNPath: "studioqa-vod.akamaized.net"
PosterImageURL: "https://qa.onlinexperiences.com/FileLibrary/522/4/ChannelHeader.jpg"
PoweredByLink: "<a target=\"_blank\" id=\"PoweredByDisplay\" class=\"PoweredBy PoweredByLogo\" style=\"background:url(/cfr/images/VTS/spacer.gif) rgba(0, 0, 0, .4);\" href=\"https://www.inxpo.com/poweredbyinxpo/?ShowKey=11975&EventKey=119158\"><img src=\"/cfr/images/VTS/PoweredByDisplayIcon.svg\" border=\"0\" /></a>"
ResumeTime: 0
STUDIOIngestDomainName: "vcqa.onlinexperiences.com"
ScriptDir: "::{ScriptDir}"
ServerAddress: "https://::{ServerIPAddress}/"
ShareWidgetFeatures: 0
ShowKey: 11975
ShowType: 2
ShowUUID: "9D0D9F04-0348-4A80-BD41-399E2A03B6B8"
SimuLiveMediaVersion: 3
SocketPadNumber: 9
SpeakerID: ""
SynCDNPath: "qa.onlinexperiences.com"
TZAbbrev: "EST"
TargetBitRate: 800
UploadServerURL: "::{UploadServerURL}"
UserKey: 1562712
UserType: 0
VAR: "g_oSettings"
VerifyManifestTimeout: 5
ViewedTimeOffset: 0

 */

class StudioDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const data = oData.ResultSet[23][0];


    return (
      <div>
        <h2
          style={{
            margin: "24px 12px 0 12px",
          }}
        >
          {data.EventDescription}
        </h2>
        <div
          style={{
            margin: "12px",
            display: "inline-block",
          }}
        >
          <span
            style={{
              margin: "0 12px",
            }}
          >
            <EyeOutlined /> 405
          </span>
          <span
            style={{
              margin: "0 12px",
            }}
          >
            <UserOutlined /> 23
          </span>
        </div>
        <div
          style={{
            margin: "24px 12px 0 12px",
          }}
        >
         <div dangerouslySetInnerHTML={{ __html: data.EventAbstract }} /> 
        </div>
        <StudioSpeakers></StudioSpeakers>
        <StudioHandouts></StudioHandouts>
      </div>
    );
  }
}


