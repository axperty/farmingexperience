::: warning
This website hasn't been translated yet. [Contribute with translations](https://github.com/axperty/farmingexperience/tree/gh-pages).
:::

# Create a Server

## Farming Experience Server Installer

Creating a modded Minecraft server can be a complicated and time-consuming process. I created Farming Experience Server Installer
to make it easier for you to set up your server. 

It's a completely free and open-source automation script created in Python that downloads all the files you need to set up your server.

[Download Farming Experience Server Installer](https://github.com/axperty/farmingexperienceserverinstaller/releases/).

<img src="/assets/farmingexperienceserverinstaller.png" height="400" style="vertical-align: middle; border-radius: 8px; margin-right: 10px;"> 

## Prerequisites

Before running the Farming Experience Server Installer, make sure you have:

- **Port Forwarding:** For your friends to connect to your server, your router must allow the connection. If you have already opened port `25565`, the server will work immediately. [See here how to open it](https://pinggy.io/blog/minecraft_port_forwarding/).

::: tip Important
If you want to play with others connected to the same network, you don't need to do port forwarding, just use your local IP address shown in the last step of the server installer.
:::

- **Java 21 Installed:** Required to run the NeoForge installer and server. [Download Java 21 for Windows from Adoptium](https://adoptium.net/temurin/releases?version=21&os=windows&arch=x64).
- **Farming Experience:** You must have the modpack installed via the CurseForge App or Modrinth App. If you're using a different launcher,
make sure to change the path of `Farming Experience Instance Location` inside the server installer to your modpack location.

## Installation

1. [Download Farming Experience Server Installer](https://github.com/axperty/farmingexperienceserverinstaller/releases/) from the releases page on GitHub.
2. Place the `farmingexperience-server-installer_XX.XX.XX.exe` file you just downloaded in an empty folder, the installer will later create a separate folder for the server's contents.
3. Run the server installer.
4. The server installer will try to detect your modpack folder. If it fails, click `Browse` to select your Farming Experience instance folder.
5. Click `Create Server`, by clicking this button you will agree to [Minecraft's EULA](https://aka.ms/MinecraftEULA).
6. Once finished, the server installer will automatically start the server. Copy the **public or local** IP address, and send it to your friends!

## Troubleshooting

### Server Won't Start

If the server fails to start, and you see a `Press any key to continue...` text on the server console, it might be caused by one of these reasons:

::: details Unsupported Mods
Some mods like `fast-ip-ping`, `entity_model_features`, `entity_texture_features`, `lambdynamiclights`, `sodium`, `holdmyitemsnf`, `fog`, and `raised` might cause the server to immediately crash. 

**How to Fix:** Please remove them from the server `/mods/` folder and try again.
:::

::: details Port Forwarding Issues
Some routers might block the connection to the server for security reasons. It's not possible to solve this issue from the server side, you need to configure your router to allow the connection.

**How to Fix:** Please make sure you have port forwarded `25565` on your router. [See here how to open it](https://pinggy.io/blog/minecraft_port_forwarding/).
:::

::: details Unsupported Java Version
Make sure you are using Java 21 to run the server, if you're using a different version, the server will fail to start. 

**How to Fix:** [Download Java 21 for Windows from Adoptium](https://adoptium.net/temurin/releases?version=21&os=windows&arch=x64).
:::

### Error Messages

::: details Java 21 Required
This message appears when Java 21 is not installed on your system or is not being detected by the server installer.

**How to Fix:** Follow the link provided by the error message or [use this link](https://adoptium.net/temurin/releases/?version=21), download and install Java 21, and restart the server installer.
:::

If you tried all of the fixes above and the server still fails to start, feel free to [ask for help on my Discord server](https://discord.gg/e2BQx4bbsU).