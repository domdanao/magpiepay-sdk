// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "MagpiePaySample",
    platforms: [
        .macOS(.v10_15)
    ],
    dependencies: [
        .package(name: "MagpiePay", path: "../../sdks/swift")
    ],
    targets: [
        .executableTarget(
            name: "MagpiePaySample",
            dependencies: ["MagpiePay"]
        ),
    ]
)
